
const mongoose = require('mongoose')

const Note = require('./models/Note')

const url = "mongodb://localhost:27017/nucampdb"

mongoose.connect(url, {})
.then(() => {
    console.log("Connected successfully")

    const newNote = new Note({
        title: "This is my first note!",
        priority: "Low"
    })
    newNote.save().then(note => console.log(note))
})
.catch(err => console.log(err))