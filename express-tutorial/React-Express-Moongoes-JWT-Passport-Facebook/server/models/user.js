const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
       local:{ 
        email: {
          type: String,
          index: { unique: true }
        },
        password: String,
        name: String
      },
      facebook:{
        id: String,
        token: String,
        name: String
      }
});


/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.local.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  console.log("this ::::"+this);
  const user = this.local;
  console.log("user ::::" +this.local.name);
  if(this.local.name !== undefined ){
    const user = this.local;
     console.log("user local:::"+user);
    // proceed further only if the password is modified or the user is new
   // if (!user.isModified('local.password')) return next();
    return bcrypt.genSalt((saltError, salt) => {
      if (saltError) { return next(saltError); }

      return bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) { return next(hashError); }

        // replace a password string with hash value
        user.password = hash;

        return next();
      });
    });
  }else{
    return next();
  }

});


module.exports = mongoose.model('User', UserSchema);
