const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
async function sendMail(message){
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: "vabiss.test@gmail.com",
            pass: "Samir12345!"
        }
    }));
    return new Promise((resolve,reject) => {
        transporter.sendMail(message,(err,info) => {
            if(err) return reject(err)
            resolve(info);
        });
    })
}
module.exports = sendMail;



