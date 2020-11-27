const express = require('express');
const {usersModel,validUsers} = require("../models/user_models");
const bcrypt = require("bcrypt")
const _ = require("lodash");
const _Utile = require("../utilty/utility_func")

const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  usersModel.find({},{pass:0})
  .then(data => {
    res.json(data)
  })
});

router.post('/add',async(req,res) => {
  let validData = validUsers(req.body);
  if(validData.error){
    return res.status(400).json(validData.error.details);
  }
  let salt = await bcrypt.genSalt(10);
  req.body.pass = await bcrypt.hash(req.body.pass,salt);
  try{
    let data = await usersModel.insertMany([req.body]);
    let dataHidden = _.pick(data[0],["email","_id","date_time"])
    return res.json(dataHidden)
  }
  catch(err){
    res.status(400).json({message:"user already in system " + err});
  }
 
})
router.delete("/del",(req,res)=>{
  _Utile.delMongo(usersModel,req,res)
})


module.exports = router;
