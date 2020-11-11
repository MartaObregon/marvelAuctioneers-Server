const {Schema , model} = require('mongoose')


const bidSchema = new Schema ({
  winner: {
    type: Boolean,
  },
  sale_id: {
    type: Schema.Types.ObjectId,
    ref: 'Sale'
  },
  bidder_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  bidder_username:{
    type: String
  },
  bid_price: {
    type: Number,
  },
  

},
{
  timestamps:true
}
)


module.exports = model('Bid', bidSchema)