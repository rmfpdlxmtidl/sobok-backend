import type { comment } from 'src/database/sobok'
import type { Comment } from 'src/graphql/generated/graphql'
import { camelToSnake, snakeKeyToCamelKey } from '../../utils/commons'

// All GraphQL fields -> Database columns
export function commentFieldColumnMapping(commentField: keyof Comment) {
  switch (commentField) {
    default:
      return camelToSnake(commentField)
  }
}

// All database columns -> GraphQL fields
export function commentORM(comment: comment): any {
  return {
    ...snakeKeyToCamelKey(comment),
  }
}