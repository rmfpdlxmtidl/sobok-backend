import { Pool } from 'pg'

import { DatabaseQueryError } from '../apollo/errors'
import { formatDate } from '../utils'

export const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ...(process.env.NODE_ENV === 'production' && {
    ssl: {
      rejectUnauthorized: true,
      ca: `-----BEGIN CERTIFICATE-----\n${process.env.CA_CERTIFICATE}\n-----END CERTIFICATE-----`,
      checkServerIdentity: () => {
        return undefined
      },
    },
  }),
})

export async function poolQuery(query: string, values?: unknown[]) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(formatDate(new Date()), '-', query, values)
  }

  return pool.query(query, values).catch((error) => {
    if (process.env.NODE_ENV === 'production') {
      throw new DatabaseQueryError('Database query error')
    } else {
      throw new DatabaseQueryError(error)
    }
  })
}
