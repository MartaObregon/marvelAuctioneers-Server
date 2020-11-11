const express = require('express')
const BidModel = require('../models/Bid.model')
const SaleModel = require('../models/Sale.model')
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
  
    SaleModel.findById(id)
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

router.patch('/close/:idsale', (req, res)=>{
  
  let idsale = req.params.idsale
  SaleModel.findById(idsale)
  .then((sale)=>{
    console.log(sale)
    BidModel.findOneAndUpdate({sale_id: sale._id, bid_price: sale.winning_bid}, {winner: true})
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

router.get('/profile/:sale/:userid', (req, res)=>{
  let userid = req.params.userid
  BidModel.find({bidder_id: userid})
  .then((bids)=>{ //all bids [] where the user is the bidder
    // let id = bids.data.sale_id
    console.log(mybids)
    let arrayBidSalesId=  mybids.map((bid)=>{
      return bid.sale_id
     
    })
    SaleModel.findById(bid.sale_id)
    .then((sale)=>{
      res.status(200).json(sale)
    })
  
  })
})

module.exports = router