const nodemailer = require('nodemailer');
const {errorAlert,successAlert} = require("../public/js/alerts");
async function sendMail(message){
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "0a18d983319b1b",
            pass: "d662470ec43f61"
        }
    });
    return new Promise((resolve,reject) => {
        transporter.sendMail(message,(err,info) => {
            if(err) return reject(err)
            resolve(info);
        });
    })
}
module.exports = sendMail;



