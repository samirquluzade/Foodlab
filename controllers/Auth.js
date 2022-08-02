const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const catchAsync = require('../utils/catchAsync');
const db = require("../models");
const {promisify} = require("util");
let localStorage = require('../localStorage');

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000,
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: false,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // HTTPS
    localStorage.setItem("jwt",token);
    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user,
        },
    });
    user.password = undefined;
};

exports.signUp = catchAsync(async (req, res, next) => {
    const hashedPassword = crypto
        .createHash("sha256")
        .update(req.body.password)
        .digest("hex");
    const newUser = await db.User.create({
        username: req.body.username,
        password: hashedPassword
    });
    createSendToken(newUser, 201, res);
});
exports.login = catchAsync(async (req, res, next) => {
    if(localStorage.getItem("jwt")){
        res.redirect('/dashboard');
    }
    else
    {
        const { username, password } = req.body;
        // Check if email and password exist
        if (!username || !password) {
            return res.status(400).json({
                error: 'Please provide username and password'
            })
        }
        // Check if user exists && password is correct
        const user = await db.User.findOne({
            where:{
                username
            }
        });
        if (!user) {
            return res.status(401).json({
                error: 'Incorrect username or password'
            })
        }
        if(user){
            const hashedPassword = crypto
                .createHash("sha256")
                .update(req.body.password)
                .digest("hex");
            let correct = false;
            if(hashedPassword === user.password){
                correct = true;
            }
            if(!correct){
                return res.status(401).json({
                    error: 'Incorrect username or password'
                })
            }
        }
        // If everything ok,send token to client
        createSendToken(user, 200, res);
    }
});
exports.logout = (req, res) => {
    localStorage.clear();
    return res.status(200).json({
        success: true
    });
};
exports.protect = catchAsync(async (req, res, next) => {
    let token;
    // Getting token and check of it's there
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    } else if (localStorage.getItem('jwt')) {
        token = localStorage.getItem('jwt');
    }

    if (!token) {
        return next("You are not logged in! Please log in to get access.");
    }
    // Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // Check if user still exists
    const currentUser = await db.User.findByPk(decoded.id);
    if (!currentUser) {
        return next(
           "The user belonging to this token does no longer exist"
        );
    }
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
});
exports.isLoggedIn = async (req, res, next) => {
    if (localStorage.getItem('jwt')) {
        res.redirect('/dashboard');
        // try {
        //     // Verification token
        //     const decoded = await promisify(jwt.verify)(
        //         localStorage.getItem("jwt"),
        //         process.env.JWT_SECRET
        //     );
        //     // Check if user still exists
        //     const currentUser = await db.User.findOne(decoded.id);
        //     if (!currentUser) {
        //         return next();
        //     }
        //     // Check if user changed password after the token was issued
        //     // There is a logged in user
        //     res.locals.user = currentUser;
        //     return next();
        // } catch (err) {
        //     return next();
        // }
    }
    else
    {
        next();
    }
};