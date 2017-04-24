var express         = require('express'),
    app             = express(),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    bodyParser      = require('body-parser'),
    bcrypt          = require('bcrypt');
    session         = require('express-session');

// hardcoded users, ideally the users should be stored in a database
var users = [{"id":111, "username":"vinod", "password": bcrypt.hashSync("password", 10)}];
 
// passport needs ability to serialize and unserialize users out of session
passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, users[0].id);
});
passport.deserializeUser(function (id, done) {
    console.log("deserialize user::" +id);
    done(null, users[0]);
});
 
// passport local strategy for local-login, local refers to this app
passport.use('local-login', new LocalStrategy(
    function (username, password, done) {
         console.log("Local-login:" +bcrypt.compareSync(password, users[0].password));
        if (username === users[0].username && bcrypt.compareSync(password, users[0].password)) {
            return done(null, users[0]);
        } else {
            return done(null, false, {"message": "User not found."});
        }
    })
);
 
// body-parser for retrieving form data
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
 
// initialize passposrt and and session for persistent login sessions
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
 
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
 
    res.sendStatus(401);
}
 
app.get("/", function (req, res) {
    res.send("Hello!");
});
 
// api endpoints for login, content and logout
app.get("/login", function (req, res) {
    res.send("<p>Please login!</p><form method='post' action='/login'><input type='text' name='username'/><input type='password' name='password'/><button type='submit' value='submit'>Submit</buttom></form>");
});
app.post("/login", 
    passport.authenticate("local-login", { failureRedirect: "/login"}),
    function (req, res) {
        console.log("before routing");
        console.log(req.session.passport);
        res.redirect("/content");
});
app.get("/content", isLoggedIn, function (req, res) {
    res.send("Congratulations! you've successfully logged in.");
});
app.get("/logout", function (req, res) {
    req.logout();
    res.send("logout success!");
});
 
// launch the app
app.listen(3030);
console.log("App running at localhost:3030");