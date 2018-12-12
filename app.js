const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const Strategy = require('passport-http-bearer').Strategy
const session = require('express-session')
const jwt = require('jsonwebtoken')
const config = require('./config/index.json')
const myAuth = require('./libs/auth')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
passport.use(new Strategy(myAuth.verifyUser))

authRouter.use(passport.authenticate('bearer', {session: false}))
authRouter.use(function(req, res, next) {
  const token = req.get('Authorization')
  const role = req.get('role')
  const user = req.user
  jwt.verify(token.split(' ')[1], config.jwtSecret, function(err, decoded) {
    if (decoded.role !== role) {
      return res
        .status(401)
        .json({error: 'You are not authorized to view this content'})
    }
    next()
  })
})

app.use('/auth', authRouter)
app.use('/api', authRouter, postRouter)

module.exports = app
