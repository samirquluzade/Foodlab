const express = require('express');
const path = require('path');
const viewRouter = require("./routes/viewRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();
// const db = require("./models/index.js");
const app = express();
const corsOptions = {
    origin: true,
    credentials: true
};

app.set("view engine","pug");
app.set("views",path.join(__dirname, 'views'));
app.use(express.json());

app.use(express.static("."));
app.use("/img",express.static(path.join(__dirname,'public/img')));
const PORT = process.env.PORT || 3000;
app.use(cookieParser());

// db.sequelize.sync().then((req) => {
//     app.listen(PORT, () => {
//         console.log("App working");
//     });
// });
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
axios.defaults.withCredentials = true;
app.use(cors(corsOptions));
app.use("/",viewRouter);
app.use("/users",userRouter);



app.listen(PORT, () => {
    console.log(`App working from ${PORT} port`);
});

module.exports = app;