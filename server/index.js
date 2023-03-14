const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect(
    'mongodb+srv://My1habit:$Let4820$@cluster0.dwelmno.mongodb.net/habits?retryWrites=true&w=majority'
);


app.get('/getUsers', async function(req, res) {
    await UserModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


app.listen(3000, () => {
    console.log('Yay! The Server is working.');
});