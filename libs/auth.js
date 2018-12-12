const jwt = require('jsonwebtoken')
const PassportBearer = require('passport-http-bearer').Strategy
const {user} = require('./sampleData')
const config = require('../config/index.json')

const verifyUser = function(token, callback) {
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    if (err) {
      let errMsg = 'Unauthorized'
      if (err.name === 'TokenExpiredError') {
        errMsg = 'Token Expired'
      }
      callback(errMsg)
    } else {
      callback(null, user)
    }
  })
}

module.exports = {
  verifyUser
}
