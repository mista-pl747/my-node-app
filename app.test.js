import request from 'supertest';
import app from './app.js';

const agent = request.agent(app); 

describe('Basic routes', () => {
  test('GET / should return hello message', async () => {
    const response = await agent.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from my Node.js app!');
  });
});