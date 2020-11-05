const mongoose = require ('mongoose')

let configOptions = {
  useNewUrlParser : true,
  useUnifiedTopology: true,
}

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/server-marvelauctioneers'

mongoose
  .connect( MONGODB_URI, configOptions )
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });