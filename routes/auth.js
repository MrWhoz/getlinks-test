// @flow
const express = require('express')
// import {user} from '../libs/sampleData'
const router = express.Router()
const passport = require('passport')
const config = require('../config')
const {user} = require('../libs/sampleData')
const jwt = require('jsonwebtoken')

/* GET home page. */
router.post('/login', function(req, res, next) {
  const {username, password} = req.body
  if (user.username === username && user.password === password) {
    const payload = {username: user.username}
    const token = jwt.sign(payload, config.jwtSecret)
    res.json({code: 0, success: 'true', token, username, id: 1})
  } else {
    res.status(401).json({message: 'passwords did not match'})
  }
})

module.exports = router
