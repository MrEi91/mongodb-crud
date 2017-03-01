'use strict'

const book = require('../models/book')

module.exports = {
  insertBooks: function (req, res) {
    let arrBooks = []
    arrBooks.push(
      {
        isbn: '978-1-60309-057-5',
        title: 'Dragon Puncher',
        author: 'James kochalka',
        category: 'all ages',
        stok: 7
      },
      {
        isbn: '978-1-60309-057-6',
        title: 'Harry Potter',
        author: 'James kochalka',
        category: 'all ages',
        stok: 6
      },
      {
        isbn: '978-1-60309-057-7',
        title: 'Dan brown',
        author: 'James kochalka',
        category: 'all ages',
        stok: 7
      },
      {
        isbn: '978-1-60309-057-8',
        title: 'Laskar pelangi',
        author: 'James kochalka',
        category: 'all ages',
        stok: 7
      })
  }
  book.create(arrBooks).then(function(data){
    res.send(data)
  })
}
