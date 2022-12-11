const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
  
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  specDemand1: {
    type: Boolean,
    required: true
  },
  specDemand2: {
    type: Boolean,
    required: true
  },
  demand: {
    type: String,
    required: true
  },
  trip: {
    type: Number,
    required: true
  },
 
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  
})

module.exports = mongoose.model('Reservations', ReservationSchema)