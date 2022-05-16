const mongoose = require ('mongoose');

const requestSchema = mongoose.Schema ({
    client : String,
    adress : String,
    phone : Number,
    MF : String,
    chargeFix : Number,
    marge : Number,
   carburant : Number,
    depart : String,
   arrive : String,
   nbreDeJour : Number,
   nbreDeCar : Number,
   destination :  String,
   somme : Number,
   firstName : String,
   lastName : String,
   id : String
});


const demande = mongoose.model('request', requestSchema);

module.exports = demande;