const express = require('express');
const path = require('path');
const viewRouter = require("./routes/viewRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const cors = require("cors");
require('dotenv').config();
// const db = require("./models/index.js");
const app = express();

app.set("view engine","pug");
app.set("views",path.join(__dirname, 'views'));
app.use(express.json());

app.use(express.static("."));
app.use("/img",express.static(path.join(__dirname,'public/img')));
const PORT = process.env.PORT || 3000;

// db.sequelize.sync().then((req) => {
//     app.listen(PORT, () => {
//         console.log("App working");
//     });
// });
app.use(cors());
app.use("/",viewRouter);
app.use("/users",userRouter);
app.listen(PORT, () => {
    console.log("App working");
});

module.exports = app;