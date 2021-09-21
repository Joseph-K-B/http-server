import request from 'supertest';
import app from '../lib/app.js';
import { readFile } from 'fs/promises';
import { read } from 'fs';
// const index = '../public/index.html';

describe('http server app routes', () => {
  it('gets index.html file from get /', async () => {
    const [res, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8')
    ]);
    expect (res.statusCode).toEqual(200);
    expect(res.text).toEqual(index);
  });

  it('gets css file from get /css/main.css', async () => {
    const [res, cssFile] = await Promise.all([
      request(app).get('/css/main.css'),
      readFile('./public/css/main.css', 'utf-8')
    ]);
    expect (res.statusCode).toEqual(200);
    expect (res.text).toEqual(cssFile);
  });

  it('returns 404 for non-existant GET route', async () => {
    const res = await request(app).get('/fake');
    expect (res.statusCode).toEqual(404);
  });

  it('returns 404 for GET /css route', async () => {
    const res = await request(app).get('/css');
    expect (res.statusCode).toEqual(404);
  });
});
