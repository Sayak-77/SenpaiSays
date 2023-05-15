const express = require('express');
const server = express();
const cors = require('cors');
const parser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

  const formSchema = new mongoose.Schema({
    first_movie: {
        type: String,
        required: true
    },
    second_movie: {
      type: String,
      required: true
    },
    third_movie: {
      type: String,
      required: true
    },
    movie_genere: {
      type:String,
      required: true
    },
    first_song: {
        type: String,
        required: true
    },
    second_song: {
      type: String,
      required: true
    },
    third_song: {
      type: String,
      required: true
    },
    song_genere: {
      type:String,
      required: true
    },
    first_book: {
      type: String,
      required: true
    },
    second_book: {
      type: String,
      required: true
    },
    third_book: {
      type: String,
      required: true
    },
    book_genere: {
      type:String,
      required: true
    },
    email: {
      type:String,
      required: true
    }
  });

const User = mongoose.model('User', userSchema);
const Form = mongoose.model('Form',formSchema);
server.use(cors());
server.use(parser.json());
let glob;

server.post('/register', async(req,res)=>{
  try{
  const{ name, email, password}= req.body;
  glob=req.body.email; 
    let user= await User.findOne({email});
    if(user){
      res.status(400).send("User Already Exists!");
    }
    else{
      user = new User({name,email,password});
      await user.save();
      res.status(200).send("Registration Successful.Please login using the SignIn Key!");
  }
}
  catch(err)
  {
    res.status(500).send("Something Went Wrong!");
  }
})

server.post('/auth', async (req,res)=>{
  try{
  const{ lemail, lpass} = req.body;
  let help = await User.findOne({"email": lemail});
  if(help){
    if(help.password===lpass){
      res.status(200).send("Login Successful!! Please fill preference form");
    }
    else{
      res.status(400).send("Incorrect Password!!");
    }
  }
  else{
    res.status(400).send("User not Registered. Please register using the SignUp Key!")
  }}
  catch(err)
  {
    res.status(500).send("Something Went Wrong!");
  }
})

server.get('/register/:mydata', async(req,res)=>{
  try{
  const data = req.params.mydata;
  let user= await User.findOne({email:data});
  res.json(user);
  }
  catch(error){
    res.status(500).json({error: 'Something went Wrong!'});
  }
})

server.post('/form', async(req,res)=>{
  try{
  let form=new Form();
    form.first_movie=req.body.first_movie;
    form.second_movie=req.body.second_movie;
    form.third_movie=req.body.third_movie;
    form.movie_genere=req.body.movie_genere;

    form.first_song=req.body.first_song;
    form.second_song=req.body.second_song;
    form.third_song=req.body.third_song;
    form.song_genere=req.body.song_genere;
    
    form.first_book=req.body.first_book;
    form.second_book=req.body.second_book;
    form.third_book=req.body.third_book;
    form.book_genere=req.body.book_genere;
    form.email=req.body.email;
    await form.save();
    res.status(200).send("Preference Saved successfuly.Thank You!");
  }
  catch(error){
    res.status(500).send("Something went wrong!")
  }
})

server.get('/form/:mydata', async(req,res)=>{
  try{
  const data = req.params.mydata;
  let user= await Form.findOne({email:data});
  res.json(user);
  }
  catch(error){
    res.status(500).json({error: 'Something went Wrong!'});
  }
})

server.listen(8080,()=>{
    console.log('server started')
})