const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const GOOGLE_CLIENT_SECRET = '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'
const GOOGLE_CLIENT_ID = '527076122389-lj6j2gsrk0fhr437j9ama2np7rig2m9l.apps.googleusercontent.com'

GITHUB_CLIENT_ID = "42269703f871b0677ed5"
GITHUB_CLIENT_SECRET = "5c6127d78ec45e2cf03d921bcc7be40d8659af74"

FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
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
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})