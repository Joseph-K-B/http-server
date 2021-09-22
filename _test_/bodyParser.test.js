// import { request } from 'supertest';
// import bodyParser from '../lib/utils/bodyParser.js';
const bodyParser = require('../lib/utils/bodyParser');

describe('parses body from each http request', () => {
  it('returns null for GET & Delete methods', async () => {
    const req = await bodyParser({ method: 'DELETE' });
    expect(req).toEqual(null);
  });
});
