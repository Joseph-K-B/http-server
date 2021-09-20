import request from 'supertest';
import app from '../lib/app.js';
import index from '../public/index.html';

describe('http server app routes', () => {
  it('gets index.html file from get /index', async () => {
    const res = await request(app).get('/index');
    expect (res.statusCode).toEqual(200);
    expect(res.text).toEqual(index);
  });
});
