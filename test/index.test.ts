/* eslint-disable prefer-promise-reject-errors */

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

test('NODE_ENV', () => {
  expect(process.env.NODE_ENV).toBe('test')
})

test('POSTGRES_HOST', () => {
  expect(process.env.BACKEND_URL).toBeDefined()
})

test('the data is peanut butter', async () => {
  await expect(new Promise((resolve) => resolve('peanut butter'))).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  await expect(new Promise((resolve, reject) => reject('error'))).rejects.toMatch('error')
})
