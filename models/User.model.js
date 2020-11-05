const {Schema , model} = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type:String,
      required: true,
    },
    email: {
      type:String,
      required:true,
    },
    password: {
      type:String,
      required: true,
    },
    wallet_credit: {
      type: Number ,
    },

  },
  {
    timestamps: true,
  }
)



module.exports = model ('User', userSchema)