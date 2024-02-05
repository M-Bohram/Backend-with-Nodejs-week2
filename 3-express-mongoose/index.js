
const express = require('express')
const mongoose = require('mongoose')

const noteRouter = require('./routes/NoteRouter')

const url = 'mongodb://localhost:27017/nucampdb'

mongoose.connect(url, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => {
    console.log("Connected successfully!")

    const app = express()

    app.use(express.json())
    app.use('/notes', noteRouter)

    app.listen(3000, () => {
        console.log("Listening on port 3000")
    })
})
.catch(err => console.log(err))