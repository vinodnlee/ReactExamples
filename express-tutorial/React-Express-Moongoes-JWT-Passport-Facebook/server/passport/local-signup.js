const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  console.log("email ::" +email);
  console.log("password ::" +password);
  console.log("name ::" +req.body.name.trim());
  var newUser = new User();
  newUser.local.email = email.trim();
  newUser.local.password = password.trim();
  newUser.local.name = req.body.name.trim();
 // const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { 
      console.log(err);
      return done(err); 
    }

    return done(null);
  });
});
