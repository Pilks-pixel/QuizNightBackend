const { MongoClient } = require('mongodb')

  // const connectionUrl = process.env.CONNECTION_URL
 const uri = process.env.MONGODB_URI;
  const dbName = process.env.DATABASE_NAME;


const init = async () => {
  let client = await MongoClient.connect(uri)
  // return MongoClient.connect(connectionUrl).then((client) => {
  //   db = client.db(dbName)

  console.log('connected to database!', dbName)


  return client.db(dbName);
  
}

init();

module.exports = {init};
