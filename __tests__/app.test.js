const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const Band = require('../lib/models/Band');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /bands responds with an array of bands', async () => {
    const res = await request(app).get('/bands');
    const bands = await Band.getAll();
    expect(res.body).toEqual(bands);
  });
  afterAll(() => {
    pool.end();
  });
});
