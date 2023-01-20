var express = require('express');
const User = require('../model/user');
var router = express.Router();


router.post('/signup', async(req,res)=>{
const { fname,lname,email,phone,state,address,zipCode,password } = req.body
  try {
    const found = await User.findOne({where:{email}})
    if(found){
      res.send({
        status:false,
        reason:'User Already Exist'
      })
    }
    else{
      await User.create({fname,lname,email,phone,state,address,zipCode,password})
      res.send({
        status:true,
        reason:'User is Created'
      })
    }
        
  } catch (error) {
    res.send({
      status:false,
      reason:error.message
    })
  }
  
})
router.post('/login', async(req,res)=>{
  const {email,password} = req.body
  try {
    const found = await User.findOne({where:{email,password}})
    if(found){
      res.send({
        status:true,
        reason:"User Found",
        fname:found.fname
      })
      }
      else{
        res.send({
          status:false,
          reason:"Please check your email and password"
        })
      }
  } catch (error) {
    res.send({
      status:false,
      reason:error.message
    })
  }
})

module.exports = router;
