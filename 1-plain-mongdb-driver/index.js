
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbname = 'nucampdb'

MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {

    console.log("Connected to the MongoDB server successfully")
    const db = client.db(dbname)

    const collection = db.collection('campsites')

    collection.find().toArray()
    .then(docs => {

        console.log("Found documents", docs)

    })
    .catch(err => console.log(err))
    .finally(() => {
        client.close()
    })
})
.catch(err => {
    console.log(err)
})
