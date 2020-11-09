const express = require('express')
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
  console.log(req.params.id)
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

module.exports = router