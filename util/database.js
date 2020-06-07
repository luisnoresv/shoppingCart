const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://luisnoresv:oStWZa0ffnjkFq5x@shop-iw9ut.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Conected to Mongo Cloud');
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;

  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
