// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//     function(userId, userPassword, done){
//         User.findOne({ userId : userId }, function(err, user){
//             if(err) { return done(err); }
//             if(!user) { return done(null, false, {message : 'Incorrect username'})}
//             if(!user.validPassword) { return done(null, false, {message: 'Invalid password'})}
//             return done(null, user)
//         })
//     }
// ))

// // passport 세션 설정
// passport.serializeUser(function(user, done){
//     done(null, user._id)
// })

// passport.deserializeUser(function(user, done){
//     User.findById(id, function(err, user){
//         done(err, user)
//     })
// })