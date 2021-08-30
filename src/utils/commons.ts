import { promises } from 'fs'
import { join } from 'path'
import { string } from 'pg-format'

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function importSQL(dirname: string, filename: string) {
  return (await promises.readFile(join(dirname, filename), 'utf-8')).replace(/\s+/gi, ' ')
}

export function camelToSnake(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

export function snakeToCamel(str: string) {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
}

export function returnZeroWhenZeroDivision(numerator: number, denominator: number) {
  return denominator !== 0 ? numerator / denominator : 0
}

export function removeDoubleQuotesAround(words: string[], sentence: string) {
  return words.reduce(
    (acc, word) => (acc.indexOf(word) > -1 ? acc.replace(`"${word}"`, word) : acc),
    sentence
  )
}

export function removeDoubleQuotes(word: string) {
  return word[0] === '"' && word[word.length - 1] === '"' ? word.slice(1, -1) : word
}

export function areAllElementsSame(arr: unknown[]) {
  return arr.every((v) => v === arr[0])
}

export function isUniqueArray(arr: string[]) {
  const seenValues: Record<string, unknown> = {}

  for (let i = 0; i < arr.length; i++) {
    if (seenValues[arr[i]]) {
      return false
    } else {
      seenValues[arr[i]] = true
    }
  }

  return true
}

export function includeSome(arr: unknown[], arr2: unknown[]) {
  return arr.some((element) => arr2.includes(element))
}

export function isThereIntersection(setA: Set<unknown>, setB: Set<unknown>) {
  for (const elem of setB) {
    if (setA.has(elem)) {
      return true
    }
  }
  return false
}

export function snakeKeyToCamelKey(snakeObject: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(snakeObject).map(([snakeKey, value]) => [snakeToCamel(snakeKey), value])
  )
}

export function formatDate(date: Date): string {
  return `${date.getUTCFullYear()}년 ${
    date.getUTCMonth() + 1
  }월 ${date.getUTCDate()}일 ${date.getUTCHours()}시 ${date.getUTCMinutes()}분 ${date.getUTCSeconds()}초`
}
