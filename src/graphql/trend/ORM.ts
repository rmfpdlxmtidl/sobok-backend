import { camelToSnake, snakeKeyToCamelKey } from '../../utils'

import type { Trend } from 'src/graphql/generated/graphql'
import type { trend } from 'src/database/sobok'

// All GraphQL fields -> Database columns
export function trendFieldColumnMapping(trendField: keyof Trend) {
  switch (trendField) {
    default:
      return camelToSnake(trendField)
  }
}

// All database columns -> GraphQL fields
export function trendORM(trend: Partial<trend>): any {
  return {
    ...snakeKeyToCamelKey(trend),
  }
}
