const { response } = require('express')
const express = require('express')
const BidModel = require('../models/Bid.model')
const SaleModel = require('../models/Sale.model')
const UserModel = require ('../models/User.model')
const router = express.Router()



router.get('/search', (req, res)=>{
  SaleModel.find()
    .then((sales)=>{
      res.status(200).json(sales)
    })
    .catch((err)=>{
      res.status(500).json({
        error:'Something went wrong',
        message: err,
      })
    })
})

router.get('/detail/:id', (req, res)=>{
  let id = req.params.id
  
    SaleModel.findById(id).populate('winning_buyer')
      .then((sale)=>{
        res.status(200).json(sale)
      })
      .catch((err)=>{
        res.status(500).json({
          error: 'Something went wrong',
          message: err,
        })
      })
})

router.get('/detail/:saleid/checkout', (req, res)=>{
  let id = req.params.saleid

  SaleModel.findById(id)
  .then((response)=>{
    console.log(response)
    res.status(200).json(response)
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'Something went wrong',
      message: err,
    })
  })
})

router.patch('/detail/:iduser/:idsale/payment', (req, res)=>{
  let userId = req.params.iduser
  let saleid = req.params.idsale
  console.log(saleid)
  
  SaleModel.findByIdAndUpdate(saleid, {paymentCompleted: true}, {new:true})
  .then((sale)=>{
    let topay = sale.winning_bid
    UserModel.findById(userId)
    .then((user)=>{
      console.log('holaaa', user, topay)
      let result = user.wallet_credit - topay
      UserModel.findByIdAndUpdate(userId, {$set:{wallet_credit: result}}, {new:true})
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
  })
 
})

router.patch('/close/:idsale', (req, res)=>{
  
  let idsale = req.params.idsale
  SaleModel.findByIdAndUpdate(idsale, {close:true})
  .then((sale)=>{
    console.log(sale)
    BidModel.findOneAndUpdate({sale_id: sale._id, bid_price: sale.winning_bid}, {winner: true}, {new:true}).populate('sale_id')
    .then((response)=>{
      console.log('RESPONSE', response)
      res.status(200).json(response)
    })

    
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'Something went wrong',
      message: err,
    })
  }) 
  
  

})

router.get('/profile/:userid/bids-info', (req, res)=>{
  let userId = req.params.userid
  BidModel.find({bidder_id: userId}).populate('sale_id')
  .then((response)=>{
    console.log(response)
    res.status(200).json(response)
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'Something went wrong',
      message: err,
    })
  }) 
})






module.exports = router