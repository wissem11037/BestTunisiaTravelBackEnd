const mongoose = require('mongoose')

const VoyageSchema = new mongoose.Schema({
 
      libelle: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      },
      prix: {
        type: Number,
        required: true
      },
      nouveau: {
        type: Boolean,
        required: true
      },
      dateDepart: {
        type: Date,
        required: true,
       
     },
      dateArrive: {
        type: Date,
        required: true,
     },
      destination: {
        type: Array,
        required: true
      },
      ServicesNonInclus: {
        type: Array,
        required: true
      },
     description: {
        type: String,
        required: true
      },
     
   
})

module.exports = mongoose.model('Voyages', VoyageSchema)