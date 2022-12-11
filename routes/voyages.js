var express=require('express');
var router=express.Router();
const Voyage = require('../models/Voyage');
router.get('/voyages',async function(req,res){
    try {
        const Voyages = await Voyage.find()
        res.json(Voyages)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});
router.get('/voyage/:id',async function(req,res){
  try {
      const Voyages = await Voyage.findOne({'_id': req.params.id})
      res.json(Voyages)
      console.log("request 200 complete")
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
});
router.delete('/voyage/:id',async function(req,res){
  try {
      Voyage.findByIdAndRemove( req.params.id).exec()
      res.json({ message: "Voyage deleted!"})
      
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
});
router.post('/voyage', async (req, res) => {
    const voyage = new Voyage({
      ServicesNonInclus: req.body.ServicesNonInclus,
      prix: req.body.prix,
      photo: req.body.photo,
      nouveau: req.body.nouveau,
      libelle:req.body.libelle,
      destination:req.body.destination,
      description:req.body.description,
      dateArrive:req.body.dateArrive,
      dateDepart:req.body.dateDepart,
      

    })
    try {
      const newVoyage = await voyage.save()
      res.status(201).json(newVoyage)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
module.exports=router;