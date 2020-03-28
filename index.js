"use strict";

const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const config = require("./config.json");
const EMAIL_API_KEY = config.EMAIL_API_KEY;
const EMAIL_SENDER = config.EMAIL_SENDER;
const EMAIL_SEND_TO = config.EMAIL_SEND_TO;
const EMAIL_USER = config.EMAIL_USER;
const EMAIL_PASS = config.EMAIL_PASS;

const app = express();

// Parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
const Sendgrid = require("@sendgrid/client");
Sendgrid.setApiKey(EMAIL_API_KEY);

app.post("/api/form", async (req, res, next) => {
  const htmlEmail = `
  <h3>Contact Detail</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h4>Message: </h4>
  <p>${req.body.message}</p>

  `;
  const request = {
    method: "POST",
    url: "/v3/mail/send",
    body: {
      personalizations: [
        {
          to: [{ email: EMAIL_SEND_TO }],
          subject: "Contact Request"
        }
      ],
      from: { email: EMAIL_SENDER },
      content: [
        {
          type: "text/html",
          value: htmlEmail
        }
      ]
    }
  };

  // [END gae_flex_sendgrid]

  if (req.query.test) {
    request.mailSettings = {
      sandboxMode: {
        enable: true
      }
    };
  }

  // [START sendgrid]
  try {
    await Sendgrid.request(request);
  } catch (err) {
    next(err);
    return;
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  //console.log(`App listening on port ${PORT}`);
  //console.log("Press Ctrl+C to quit.");
});
