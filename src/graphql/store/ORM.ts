import { GraphQLResolveInfo } from 'graphql'
import graphqlFields from 'graphql-fields'
import format from 'pg-format'
import { ApolloContext } from 'src/apollo/server'
import type { Store as GraphQLStore } from 'src/graphql/generated/graphql'
import {
  removeColumnWithAggregateFunction,
  selectColumnFromSubField,
  serializeSQLParameters,
} from '../../utils/ORM'
import {
  camelToSnake,
  importSQL,
  removeQuotes,
  snakeToCamel,
  tableColumnRegEx,
} from '../../utils/commons'
import { menuFieldColumnMapping } from '../menu/ORM'

const joinHashtag = importSQL(__dirname, 'sql/joinHashtag.sql')
const joinLikedStore = importSQL(__dirname, 'sql/joinLikedStore.sql')
const joinMenu = importSQL(__dirname, 'sql/joinMenu.sql')
const joinStoreBucket = importSQL(__dirname, 'sql/joinStoreBucket.sql')
const stores = importSQL(__dirname, 'sql/stores.sql')

const storeFieldsFromOtherTable = new Set([
  'isInBucket',
  'isLiked',
  'menus',
  'hashtags',
  'news',
  'user',
])

export function storeFieldColumnMapping(storeField: keyof GraphQLStore) {
  if (storeFieldsFromOtherTable.has(storeField)) {
    return 'store.id'
  }

  return `store.${camelToSnake(storeField)}`
}

// GraphQL fields -> SQL
export async function buildBasicStoreQuery(
  info: GraphQLResolveInfo,
  user: ApolloContext['user'],
  selectColumns = true
) {
  const storeFields = graphqlFields(info) as Record<string, any>
  const firstMenuFields = new Set(Object.keys(storeFields))

  let sql = await stores
  let columns = selectColumns ? selectColumnFromSubField(storeFields, storeFieldColumnMapping) : []
  const values: unknown[] = []
  let groupBy = false

  if (firstMenuFields.has('isInBucket')) {
    if (user) {
      sql = `${sql} ${await joinStoreBucket}`
      columns.push('bucket.id')
      values.push(user.id)
    }
  }

  if (firstMenuFields.has('isLiked')) {
    if (user) {
      sql = `${sql} ${await joinLikedStore}`
      columns.push('user_x_liked_store.user_id')
      values.push(user.id)
    }
  }

  if (firstMenuFields.has('menus')) {
    const menuColumns = selectColumnFromSubField(storeFields.menus, menuFieldColumnMapping).map(
      (column) => `array_agg(${column})`
    )

    sql = `${sql} ${await joinMenu}`
    columns = [...columns, ...menuColumns]
    groupBy = true
  }

  if (firstMenuFields.has('hashtags')) {
    sql = `${sql} ${await joinHashtag}`
    columns.push('array_agg(hashtag.name)')
    groupBy = true
  }

  if (firstMenuFields.has('news')) {
    //
  }

  if (firstMenuFields.has('user')) {
    //
  }

  const filteredColumns = columns.filter(removeColumnWithAggregateFunction)

  if (groupBy && filteredColumns.length > 0) {
    sql = `${sql} GROUP BY ${filteredColumns}`
  }

  return [format(serializeSQLParameters(sql), columns), columns, values] as const
}

// Database records -> GraphQL fields
export function storeORM(rows: unknown[][], selectedColumns: string[]): GraphQLStore[] {
  return rows.map((row) => {
    const graphQLStore: any = {}

    selectedColumns.forEach((selectedColumn, i) => {
      const [_, __] = (selectedColumn.match(tableColumnRegEx) ?? [''])[0].split('.')
      const tableName = removeQuotes(_)
      const columnName = removeQuotes(__)
      const camelTableName = snakeToCamel(tableName)
      const camelColumnName = snakeToCamel(columnName)
      const cell = row[i]

      if (tableName === 'store') {
        graphQLStore[camelColumnName] = cell
      }
      //
      else if (tableName === 'user_x_liked_store') {
        if (cell) {
          graphQLStore.isLiked = true
        }
      }
      //
      else if (tableName === 'isInBuckeet') {
        if (cell) {
          graphQLStore.isLiked = true
        }
      }
      //
      else if (tableName === 'hashtag') {
        graphQLStore.hashtags = cell
      }
      //
      else if (tableName === 'menu') {
        if (!graphQLStore.menus) {
          graphQLStore.menus = []
        }

        const menus = cell as unknown[]

        menus.forEach((menu, j) => {
          if (!graphQLStore.menus[j]) {
            graphQLStore.menus[j] = {}
          }

          graphQLStore.menus[j][camelColumnName] = menu
        })
      }
      //
      else {
        if (!graphQLStore[camelTableName]) {
          graphQLStore[camelTableName] = {}
        }

        graphQLStore[camelTableName][camelColumnName] = cell
      }
    })

    return graphQLStore
  })
}

export function encodeCategories(categories: string[]) {
  return categories.map((category) => {
    switch (category) {
      case '콘센트':
        return 0
      case '넓은테이블':
        return 1
      case '편한의자':
        return 2
      case '애견동반':
        return 3
      case '통유리':
        return 4
      case '흡연실':
        return 5
      case '노키즈존':
        return 6
      case '주차장':
        return 7
      case '루프탑':
        return 8
      case '야외석':
        return 9
      case '포장 전용':
        return 10
      default:
        return null
    }
  })
}

export function decodeCategories(ids: number[]) {
  return ids.map((id) => {
    switch (id) {
      case 0:
        return '콘센트'
      case 1:
        return '넓은테이블'
      case 2:
        return '편한의자'
      case 3:
        return '애견동반'
      case 4:
        return '통유리'
      case 5:
        return '흡연실'
      case 6:
        return '노키즈존'
      case 7:
        return '주차장'
      case 8:
        return '루프탑'
      case 9:
        return '야외석'
      case 10:
        return '포장 전용'
      default:
        return ''
    }
  })
}
