var express=require('express');
var router=express.Router();
const Reservation = require('../models/Reservation');
router.get('/reservations',async function(req,res){
    try {
        const Reservations = await Reservation.find()
        res.json(Reservations)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});
router.post('/reservation', async (req, res) => {
    const reservation = new Reservation({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      specDemand1:req.body.specDemand1,
      specDemand2:req.body.specDemand2,
      demand:req.body.demand,
      trip:req.body.trip,
      date:req.body.date,
      id:req.body.id

    })
    try {
      const newReservation = await reservation.save()
      res.status(201).json(newReservation)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
module.exports=router;