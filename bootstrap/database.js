const mongoose = require('@anarklab/expressive-mongodb')
const {
  MONGODB_HOSTNAME,
  MONGODB_PORT,
  MONGODB_DATABASE
} = require('../config/database')

const MONGODB_URI = `mongodb://${MONGODB_HOSTNAME}:${MONGODB_PORT}/${MONGODB_DATABASE}`

module.exports = mongoose(MONGODB_URI)
