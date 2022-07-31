const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const catchAsync = require('../utils/catchAsync');
const db = require("../models");

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // HTTPS
    res.cookie("jwt", token, cookieOptions);
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
});
exports.logout = (req, res) => {
    res.cookie("jwt", "loggedout", {
        expires: new Date(Date.now + 24 * 3600 * 1000),
        httpOnly: true,
    });
    res.status(200).json({
        status: "success",
    });
};