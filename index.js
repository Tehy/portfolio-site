const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const config = require("./config.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, resp) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: config.user,
        pass: config.pass
      }
    });

    let mailOptions = {
      from: config.user,
      to: config.to,
      replyTo: "sender",
      subject: "Portfolio Contact Request",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;
//const PORT = 8080;

app.listen(PORT, () => {
  console.log("serverlisten ", { PORT });
});
/* app.get("/", function(req, res) {
  res.render("./build/index.html");
}); */
