const express = require('express')
const router = express.Router()

let UserModel = require('../models/User.model')



router.patch('/:userId/profile', (req, res)=>{
  let userId = req.params.id
  let addedcredit = req.body
 
  
  
  UserModel.findOneAndUpdate(userId, {$set: {wallet_credit: wallet_credit + addedcredit }})
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>{
        res.status(500).json({
          error:'user was not updated',
          message: err,
        })
    })
})


module.exports =router