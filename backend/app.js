const express = require ('express');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/alenjaze');

const app = express();
const path = require('path');
const multer = require('multer');
const bcrypt = require ('bcrypt');

// import body parser module
const bodyParser = require("body-parser");
const signup = require('./module/signup');
const { request } = require('express');
const demande = require('./module/request-admin');
const { add } = require('nodemon/lib/rules');
const addReq = require('./module/add-facture');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('src/assets/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'video/mp4': 'mp4',
    
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'src/assets/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});





// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// business logic SIGNUP (add user)
app.post('/user/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
        console.log('here signup', req.body);
        const userObj = new signup({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedPwd,
        });
        userObj.save((err, result) => {
            console.log('resultat after save', result);
            if (err) {
                res.status(200).json({
                    message: 'Email exist'
                });
            } else {
                res.status(200).json({
                    message: 'success'
                })

            }
        });
    });
});


// business logic LOGIN
app.post('/user/signin', (req, res) => {
    console.log('here into login', req.body);
    signup.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('result after find email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0',

                })
            }
            return bcrypt.compare(req.body.password, emailResult.password)
        }
    ).then(
        (passwordResult) => {
            if (!passwordResult) {
                res.status(200).json({
                    message: '1'
                })
            }
            signup.findOne({ email: req.body.email }).then(
                (findedUser) => {
                   
                    console.log("findedUser",findedUser);
                    res.status(200).json({
                        user: findedUser,
                        message: '2',

                    });
                }
            )
        }
    )

})

// business logic ADD REQUEST
app.post('/request', (req, res)=>{
    console.log('request', req.body);
    const requestObject = new demande ({
        client : req.body.client,
        adress : req.body.adress,
        phone : req.body.phone,
        MF : req.body.MF,
        chargeFix : req.body.chargeFix,
        marge : req.body.marge,
        carburant : req.body.carburant,
        depart : req.body.depart,
        arrive : req.body.arrive,
        nbreDeJour : req.body.nbreDeJour,
        nbreDeCar : req.body.nbreDeCar,
        destination : req.body.destination,
        somme : req.body.somme,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        id : req.body.id
    });
    requestObject.save().then((result)=>{
        if (result) {
            res.status(200).json({
                message: 'added request with success'
            });
        }
    });
});

// business logic GET ALL REQUEST
app.get('/request', (req, res)=>{
    demande.find((err, doc)=>{
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedRequest: doc,
            });
        }
    });
});


// business logic GET REQUEST BI ID
app.get('/request/:id', (req, res) => {
    demande.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                request: result

            })

        }

    )

})

// business logic DELETE SHOP
app.delete('/request/:id', (req, res) => {
    demande.deleteMany({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});


// business logic EDIT TRANSFERT
app.put('/request/:id', (req, res) => {
    demande.updateOne({ _id: req.params.id }, req.body).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'Update with success'
            });
        }
    });
});

// business logic ADD REQUEST+
app.post('/addReq', (req, res)=>{
    console.log('request', req.body);
    const reqObject = new addReq ({
        client : req.body.client,
        adress : req.body.adress,
        phone : req.body.phone,
        MF : req.body.MF,
        chargeFix : req.body.chargeFix,
        marge : req.body.marge,
        carburant : req.body.carburant,
        depart : req.body.depart,
        arrive : req.body.arrive,
        nbreDeJour : req.body.nbreDeJour,
        nbreDeCar : req.body.nbreDeCar,
        destination : req.body.destination,
        somme : req.body.somme,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        id : req.body.id,
        idTransfert : req.body.idTransfert
    });
    reqObject.save().then((result)=>{
        if (result) {
            res.status(200).json({
                message: 'added request with success'
            });
        }
    });
});

// business logic GET ALL REQUEST+
app.get('/addReq', (req, res)=>{
    addReq.find((err, doc)=>{
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedReq: doc,
            });
        }
    });
});























module.exports = app;