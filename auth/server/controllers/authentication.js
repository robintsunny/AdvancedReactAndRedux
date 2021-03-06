const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')
 
function tokenForUser(user) {
    const timestamp = new Date().getTime()

    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret)
}


exports.signin = function (req, res, next) {
    res.send({token: tokenForUser(req.user)})
}


exports.signup = function(req, res, next) {
    const email = req.body.email
    const password = req.body.password
    
    if (!email || !password) {
        return res.status(422).send({error: "You need an email and password"})
    }
    
    // does user exist?
    User.findOne({email: email}, function(err, existingUser) {
        if (err) {
            return next(err)
        }

        // if user exists, eturn an error
        if (existingUser) {
            return res.statud(422).send({error: "Email in use"})
        }
        
        
        // if user doesn't exist, create and save user
        const user = new User({
            email: email,
            password: password
        })
        
        user.save(function(err) {
            if (err) {
                return next(err)
            }

            res.json({token: tokenForUser(user)})
        })


        // respond to request that user was created
    })
}