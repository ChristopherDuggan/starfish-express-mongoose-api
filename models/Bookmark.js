import mongoose from 'mongoose'

const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
})

export default mongoose.model('Bookmark', bookmarkSchema)
