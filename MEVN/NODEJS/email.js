var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '2053015@ritindia.edu',
    pass: 'rit12345'
  }
});

var mailOptions = {
  from: '2053015@ritindia.edu',
  to: 'mayurdemonk09@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HI from other mayur'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});





