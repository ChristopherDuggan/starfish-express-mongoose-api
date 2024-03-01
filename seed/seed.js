import mongoose from 'mongoose'
import connection from '../connection.js'
import data from './bookmarks.json' assert { type: 'json' }
import Bookmark from '../models/Bookmark.js'

Bookmark
  .deleteMany({})
  .then(() => Bookmark.create(data))
  .then(() => console.log('done!'))
  .then(() => mongoose.disconnect())
  .catch(error => console.error('Error', error))
