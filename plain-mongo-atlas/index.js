const { MongoClient, ServerApiVersion } = require('mongodb');

const password = "Testing123"

const uri = `mongodb+srv://mbohram:${password}@cluster0.7a0fwo5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = await client.db("nucampdb");

        db.collection("campsites").insertOne({ name: "Campsite 3"}).then((doc => console.log(doc)))
        console.log("Pinged your deployment. You successfully connected to MongoDB Atlas!");
    }
    catch (err) {
        client.close()
    }
}

run()