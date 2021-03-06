'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = Schema({
  'isbn': String,
  'title': String,
  'author': String,
  'category': String,
  'stock': Number
})

let book = mongoose.model('book', bookSchema)

module.exports = book
