const request = require('supertest');
const app = require('../src');

describe('GET /', () => {
  it('should return Hello', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello GitHub Actions!');
  });
});
