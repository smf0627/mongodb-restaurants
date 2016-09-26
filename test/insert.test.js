const Insert = require('../src/insert');

describe('Insert', () => {

  it('returns the number of documents inserted', () => {
    return Insert.insert()
                 .then(result => {
                   expect(result.insertedCount).to.be.equal(0);
                 });
  });

});