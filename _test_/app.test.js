import request from 'supertest';
import app from '../lib/app.js';
const index = '../public/index.html';

describe('http server app routes', () => {
  it('gets index.html file from get /index', async () => {
    const res = await request(app).get('/');
    expect (res.statusCode).toEqual(200);
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='./css/main.css'>
    <title>Document</title>
</head>
<body>
    <h1>Text</h1>
</body>
</html>`);
  });
});
