const router = require('express').Router()
const { join } = require('path')

router.get('/excercise', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'excercise.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'stats.html'))
})

router.get('/*', (res, req) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router