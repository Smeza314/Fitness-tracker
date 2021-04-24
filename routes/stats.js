const workout = require('../models/workout')

const router = require('express').Router()

router.get('/stats/:id', (req, res) => {
  workout.findById(req.params.id)
  .then(workout => res.json(workout))
  .catch (err => console.log(err))
})

module.exports = router