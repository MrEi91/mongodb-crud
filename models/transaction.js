'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = Schema({
  'memberId': String,
  'days': String,
  'out_date': Date,
  'due_date': Date,
  'in_date': Date,
  'fine': Number,
  'bookList': [
    {
      type: Schema.Types.ObjectId, ref: 'book'
    }
  ]
})

let transaction = mongoose.model('transaction', transactionSchema)

module.exports = transaction
