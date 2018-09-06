const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt =  require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')



const localLogin = new LocalStrategy( {usernameField: 'email'}, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if (err) {
            return done(err)
        }


        if (!user) {
             return done(null, false)
        }
    })
})


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
    secretOrKey: config.secret
}


const jwtLogin = new JWTStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        // if search fails, you'll get an err
        if (err) {
            return done(err, false)
        }

        // if search completes, either a user is found or not
        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
})


passport.use(jwtLogin)
passport.use(localLogin)