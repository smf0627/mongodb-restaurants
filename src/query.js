const Db = require('./mongo');

module.exports = {

  all() {
    return Db.then(db => {
      return db.collection('restaurants')
               .find({})
               .toArray();
    });
  },

  findByName(name) {
    return Db.then(db => {
      const query = {};
      return db.collection('restaurants')
               .find(query)
               .toArray();
    });
  }

};