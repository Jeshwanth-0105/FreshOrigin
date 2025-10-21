// Simple MongoDB setup for Farm2Home
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

const startMongoDB = async () => {
  try {
    mongod = await MongoMemoryServer.create({
      instance: {
        port: 27017,
        dbName: 'farm2home'
      }
    });
    
    const uri = mongod.getUri();
    console.log('MongoDB Memory Server started at:', uri);
    return uri;
  } catch (error) {
    console.error('Failed to start MongoDB:', error);
  }
};

const stopMongoDB = async () => {
  if (mongod) {
    await mongod.stop();
    console.log('MongoDB stopped');
  }
};

module.exports = { startMongoDB, stopMongoDB };