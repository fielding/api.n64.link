const config = {};

config.db = {};
config.db.uri = 'mongodb://127.0.0.1:27017/n64';
config.db.options = {
  useMongoClient: true
};

export default config;
