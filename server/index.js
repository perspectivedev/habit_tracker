import express, { json } from 'express';
const app = express();
import { connect } from 'mongoose';
import UserModel, { find } from './models/Users';
import cors from 'cors';

app.use(json());
app.use(cors());

connect(
      'mongodb+srv://My1habit:$Let4820$@cluster0.dwelmno.mongodb.net/habits?retryWrites=true&w=majority'
 );


app.get('./getUsers', (req, res) =>  {
    find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


app.post('./createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();


    res.json(user);
})

app.listen(3000, () => {
    console.log('Yay! The Server is working.');
});