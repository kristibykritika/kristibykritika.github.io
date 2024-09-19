const { mongoClient } = require('mongodb'); 
const uri = "mongodb+srv://admin:<usediscord>@iteminventory.h8yt4.mongodb.net/?retryWrites=true&w=majority&appName=ItemInventory"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
      const database = client.db('your_database');
      const collection = database.collection('your_collection');
  
      // ... (your MongoDB operations)
    } finally {
      await client.close();
    }
  }
  
  run().catch(console.error);
  