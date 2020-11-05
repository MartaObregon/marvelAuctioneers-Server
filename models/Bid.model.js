const {Schema , model} = require('mongoose')


const bidSchema = new Schema ({
  status: {
    type: String,
    enum: ["pending", "won", "lost"],
    required: true,
  },
  sale_id: {
    type: Schema.Types.ObjectId,
    ref: 'Sale'
  },
  bidder_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  bid_price: {
    type: Number,
  },

})


module.exports = model('Bid', bidSchema)