const express = require('express')
const routes = express.Router()
const nunjucks = require('nunjucks')
const pdf = require('html-pdf')

routes.get('/', (req, res) => {
  res.render('auth/signup', {
    msg: 'Hello world!!'
  })
})

routes.get('/pdf', (req, res) => {
  const renderedHtml = nunjucks.render('auth/signup.njk', {
    msg: 'Hello world 2!!'
  })
  pdf.create(renderedHtml).toStream((err, stream) => {
    if (err) console.log(err)
    stream.pipe(res)
  })
})

module.exports = routes
