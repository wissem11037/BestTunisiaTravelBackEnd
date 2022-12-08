var express=require('express');
var router=express.Router();
const Voyage = require('../models/Voyage');
router.get('/Voyages',async function(req,res){
    try {
        const Voyages = await Voyage.find()
        res.json(Voyages)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});
router.post('/voyage', async (req, res) => {
    const voyage = new Voyage({
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
      const newVoyage = await voyage.save()
      res.status(201).json(newVoyage)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
module.exports=router;