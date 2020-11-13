const express = require('express')
const SaleModel = require('../models/Sale.model')
const router = express.Router()
let BidModel = require('../models/Bid.model')
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

router.post('/profile/add-sale', (req, res)=>{
  const {title, description, image_url, expiring_date, state, starting_price, release_year} = req.body;


  console.log(req.body)
  SaleModel.create({
    title,
    description,
    image_url,
    expiring_date,
    state,
    starting_price,
    seller: req.session.loggedInUser._id,
    winning_buyer: null,
    release_year,
    winning_bid: starting_price,
    close: false,
    paymentCompleted: false,

  })
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




router.get('/sale/:id', (req, res)=>{
  let saleid = req.params.id
  BidModel.find({sale_id: saleid})
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'Please sign in or register first to access a sale detail page',
        message: err,
      })
    })
})

router.get('/sale/username/:sellerId', (req, res)=>{
  let  sellerid = req.params.sellerId
  console.log('hey', req.params.sellerId)
  UserModel.findById(sellerid)
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

//logic for bidder auth
router.post('/sale/:id', (req, res)=>{
  const {bid_price} = req.body;
  let saleId = req.params.id

  SaleModel.findById(saleId)
  .then((sale)=>{
    if(bid_price>sale.winning_bid){
      BidModel.create({
        winner: false,
        sale_id: req.params.id,
        bidder_id: req.session.loggedInUser._id,
        bid_price,
        bidder_username: req.session.loggedInUser.username
      })
      .then((bid)=>{
        SaleModel.findByIdAndUpdate(bid.sale_id, {$set:{
          winning_buyer: bid.bidder_id,
          winning_bid: bid.bid_price
        }
         
        })
        .then(()=>{
          res.status(200).json(bid)
        })
      })
    }
    else{
      res.status(500)
          .json({
            errorMessage: 'Please enter your bid always surpassing the latest quantity'
          })
    }
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'Something went wrong',
      message: err,
    })
  })
  
})


  





module.exports =router