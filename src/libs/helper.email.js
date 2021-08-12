const nodemailer = require('nodemailer');
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'henrry24orbezo@gmail.com', // generated ethereal user
      pass: 'henrry24amor', // generated ethereal password
    },
  });
  transporter.verify().then(()=>{
    console.log('Ready for send emails');
  });