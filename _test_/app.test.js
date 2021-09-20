import request from 'supertest';
import app from '../lib/app.js';
// const index = '../public/index.html';

describe('http server app routes', () => {
  it('gets index.html file from get /index', async () => {
    const res = await request(app).get('/');
    expect (res.statusCode).toEqual(200);
    // expect(res.text).toEqual(index);
  });
});
