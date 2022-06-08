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
  it('GET /bands/:id responds with a single band', async () => {
    const res = await request(app).get('/bands/6');
    const tatsuro = {
      id: '6',
      name: 'Tatsuro Yamashita',
      url: 'https://en.wikipedia.org/wiki/File:Tatsuro_Yamashita_(4to3).png',
      genre: 'Rock',
      subgenre: 'Pop',
      year: 1976,
    };
    expect(res.body).toEqual(tatsuro);
  });
  afterAll(() => {
    pool.end();
  });
});
