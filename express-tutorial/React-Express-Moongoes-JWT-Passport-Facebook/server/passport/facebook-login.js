const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../../config');
const faceBookconfig = require('../../config/auth');
const passport = require('passport');



/**
 * Return the Passport Local Strategy object.
 */

passport.serializeUser(function(user, done){
    done(null, user.id);
  });

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });
module.exports = new FacebookStrategy({
    clientID: faceBookconfig.facebookAuth.clientID,
    clientSecret: faceBookconfig.facebookAuth.clientSecret,
    callbackURL: faceBookconfig.facebookAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log("login in facebook");
              
  	User.findOne({'facebook.id':profile.id},function(err,user){
  		if(err){
  			return done(err);
  		}
  		if(user){
  			return done(null,user)

  		}
  		else {
  			var newUser = new User();
        console.log(profile);
  			newUser.facebook.id = profile.id;
  			newUser.facebook.token = accessToken;
  			newUser.facebook.name = profile.displayName;
			newUser.save(function(err){
	    				if(err)
              {
                console.log("ERRor::::");
	    					throw err;

              }
	    					// const payload = {
       			// 							 sub: user._id
      				// 						};
     					// 	 // create a token string
      				// 		const token = jwt.sign(payload, config.jwtSecret);
      				// 		const data = {
        		// 							name: user.name
      				// 					 };
      				// 		return done(null, token, data);

              console.log("Save:::::");
             	return done(null, newUser);
	    				})
	    	console.log(profile);
  		}

  	});
  }
);
