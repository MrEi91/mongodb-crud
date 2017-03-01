'use strict'

const express = require('express')
const router = express.Router()
const SEED_BOOK = require('../seeders/bookSeeders.js')

module.exports = {
  seedBooks: function (req, res) {
    SEED_BOOK.insertBooks
    res.send('succses bro')
  }
}
