const {Schema , model} = require('mongoose')


const saleSchema = new Schema ({
  state: {
    type: String,
    enum: ["good condition", "worn-off", "damaged"],
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  starting_price: {
    type: Number,
  },
  winning_buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  expiring_date: {
    type: Date
  }, 
  title: {
    type: String
  },
  description: {
    type: String
  },
  image_url: {
    type: String
  },
  release_year: {
    type: Number
  },
  winning_bid: {
    type: Number
  },
  close: {
    type: Boolean
  },
  paymentCompleted: {
    type: Boolean,
  }
})


module.exports = model('Sale', saleSchema)