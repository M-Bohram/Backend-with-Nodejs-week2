
const noteRouter = require('express').Router()

const Note = require('../models/Note')

noteRouter
.get('/', (req, res) => {
    Note.find()
        .then(docs => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(docs)
        })
        .catch(err => res.json(err))
})
.post('/', (req, res) => {
    const newNote = new Note(req.body)
    newNote.save().then(note => {
        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.json(note)
    })
    .catch(err => res.json(err))
})

module.exports = noteRouter