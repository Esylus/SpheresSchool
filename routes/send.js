const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

console.log('FOUND THE ENDPOINT');


router.post('/', function(req, res){
    console.log('SENT AN EMAIL');
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`;

let transporter = nodemailer.createTransport({
    service: 'outlook',
    secure: false,
    port: 25,
    auth: {
        user: process.env.NODEMAILER_USER, // your email address
        pass: process.env.NODEMAILER_PASSWORD // your password
    },
    tls:{
        rejectUnauthorized: false
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <anna@spheresschool.ca>', // sender address
    to: process.env.NODEMAILER_USER, // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
        res.json({success: false, msg:' Failed to send message'});
    }
    res.json({success: true, msg: 'Message sent'});

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


});
});


module.exports = router;   // DONT FORGET THIS