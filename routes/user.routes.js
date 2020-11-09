const express = require('express')
const SaleModel = require('../models/Sale.model')
const router = express.Router()

let UserModel = require('../models/User.model')



router.patch('/profile/edit', (req, res)=>{
  console.log(req.session.loggedInUser)
  let id = req.session.loggedInUser._id
  const {wallet_credit} = req.body
 console.log('Req.body', req.body)
  
  
  UserModel.findByIdAndUpdate(id, {$inc :{wallet_credit}})
    .then((response)=>{
      console.log(response)
      UserModel.findById(id)
        .then((user)=>{
          req.session.loggedInUser = user
          res.status(200).json(user)
        })
      
      
    })
    .catch((err)=>{
        res.status(500).json({
          error:'user was not updated',
          message: err,
        })
    })
})

router.post('/add-sale', (req, res)=>{
  const {expiring_date, state, starting_price} = req.body;
  SaleModel.create({expiring_date, state, starting_price})
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})


module.exports =router