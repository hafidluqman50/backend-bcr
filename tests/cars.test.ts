import request from 'supertest'
import app from '../routes/app'

describe('Testing Status Code Of Cars Available', () => {
  test('it should return 200 http code response after hit endpoint', async () => {
    const res = await request(app).get('/api/cars/list-available')
    expect(res.status).toBe(200)
  })
})