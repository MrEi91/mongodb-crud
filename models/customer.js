'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = Schema({
  'name': String,
  'memberId': String,
  'address': String,
  'zipcode': String,
  'phone': Number
})

let customer = mongoose.model('customer', customerSchema)

module.exports = customer
