const mongoose = require('mongoose')

const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../app/config')

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection

module.exports = db