import request from 'supertest';
import app from './app.js';

describe('Basic routes', () => {
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from my Node.js app!');
  });
});