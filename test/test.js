const expect  = require('chai').expect;
const fetch = require('node-fetch');

const url = 'http://localhost:3030';

const server = require('../index');

describe('General functionality', () => {
  it('returns index', async () => {
    const response = await fetch(url);
    expect(response.status).to.equal(200);
  })
});

describe('Upload action', () => {
  it('service endpoint is reachable', async () => {
    const response = await fetch(`${url}/upload`);
    expect(response.status).to.equal(200);
  });
});