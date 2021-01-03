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

app.get('/send-email', (req, res) => {
  // get variables
  const{ firstName, lastName, sender, topic, text } = req.query;

  // sendgrid requirements
  const msg = {
    to: 'figueroajorge010@gmail.com', 
    from: "softwarebyjorge@gmail.com", 
    subject: "Email from Website: " + topic,
    text: "Name: " + firstName + " " + lastName + "\nContact email: " + sender + "\nMessage: " + text,
  } 
  // send email
  sgMail.send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

