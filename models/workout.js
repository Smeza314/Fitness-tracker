const { model, Schema } = require('mongoose')

const workoutSchema = new Schema({
  day: Date,
  excercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }],
},
  {typeKey: '$type', toJSON: {virtuals: true}, toObject: {virtuals: true} }
)

workoutSchema.virtual('totalWeight').get(function () {
  let total = 0

  this.excercises.forEach(exercise => {
    total += exercise.weight
  })
  return total
})

workoutSchema.virtual('totalDuration').get(function () {
  let total = 0

  this.excercises.forEach(exercise => {
    total += exercise.duration
  })
  return total
})

workoutSchema.virtual('totalWorkouts').get(function () {
  let total = 0

  this.excercises.forEach(exercise => {
    total += exercise.name
  })
  return total
})

module.exports = model('workout', workoutSchema)