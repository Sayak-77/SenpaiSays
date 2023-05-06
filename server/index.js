const express = require('express');
const server = express();
const cors = require('cors');
const parser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/login');
  console.log('connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

const User = mongoose.model('User', userSchema);
server.use(cors());
server.use(parser.json());

server.post('/register', async(req,res)=>{
    let user= new User();
    user.name= req.body.name;
    user.email= req.body.email;
    user.password= req.body. password;
    const doc= await user.save();

    res.json(doc);
})

server.get('/register', async(req,res)=>{
  const data= await User.find({name:'Sayak Chatterjee'});
  res.json(data);
})

server.listen(8080,()=>{
    console.log('server started')
})