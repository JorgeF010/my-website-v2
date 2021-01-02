const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
// SendGrid API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors());
const port = process.env.PORT || 5000;

// welcome page
app.get('/', (req, res) => {
  res.send('Email Server - Using SendGrid')
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// const msg = {
//   to: 'figueroajorge010@gmail.com', // Change to your recipient
//   from: 'softwarebyjorge@gmail.com', // Change to your verified sender
//   subject: 'Testing Email',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
