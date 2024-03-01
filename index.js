import express from 'express'
import connection from './connection.js'
import Bookmark from './models/Bookmark.js'

const app = express()

app.get('/', (req, res) => {
  Bookmark.find({}).then(bookmarks => res.json(bookmarks))
})

app.get('/:slug', (req, res) => {
  Bookmark.findOne({title: req.params.slug}).then(bookmarks => res.json(bookmarks))
})

app.listen(3000, () => console.log('we rollin'))
