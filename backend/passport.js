const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_SECRET = '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'

const GOOGLE_CLIENT_ID = '527076122389-lj6j2gsrk0fhr437j9ama2np7rig2m9l.apps.googleusercontent.com'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
        
        // MONGODB
        // const user = {
        //     username: profile.displayName,
        //     avatar: profile.photos[0],
        // };
    }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})