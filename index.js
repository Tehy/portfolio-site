"use strict";

const express = require("express");
const path = require("path");
const atob = require("atob");
const request = require("request");
const bodyParser = require("body-parser");
const config = require("./config.json");
const EMAIL_API_KEY = config.EMAIL_API_KEY;
const EMAIL_SENDER = config.EMAIL_SENDER;
const EMAIL_SEND_TO = config.EMAIL_SEND_TO;
const GITHUB_TOKEN = config.GITHUB_TOKEN;
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

// catch contact form data
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
          subject: "Contact Request",
        },
      ],
      from: { email: EMAIL_SENDER },
      content: [
        {
          type: "text/html",
          value: htmlEmail,
        },
      ],
    },
  };
  // [END gae_sendgrid]
  if (req.query.test) {
    request.mailSettings = {
      sandboxMode: {
        enable: true,
      },
    };
  }
  // [START sendgrid]
  try {
    await Sendgrid.request(request, () => {
      res.send("Message sent succesfully");
    });
  } catch (err) {
    //next(err);
    res.send("Error sending message");
    return;
  }
});
// fetch github repos
app.post("/api/repos", async (req, res, next) => {
  // get all repos json
  var options = {
    method: "GET",
    url: "https://api.github.com/users/Tehy/repos",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Awesome-Octocat-App",
      authorization: "token " + GITHUB_TOKEN,
    },
  };
  var repoList = []; // response array
  var repoInfo = []; // temp array
  request(options, async (error, response, body) => {
    if (error) {
      console.error("error:", error);
    } else {
      const reposData = JSON.parse(body);
      let len = reposData.length;

      // get portfolio.json file of repos if existing
      for (let i = 0; i < len; i++) {
        let urlLen = reposData[i].contents_url.length;
        let urlPath =
          reposData[i].contents_url.substring(0, urlLen - 7) + "portfolio.json";

        let { name, description, html_url, language } = reposData[i];
        var options = {
          method: "GET",
          url: urlPath,
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Awesome-Octocat-App",
            authorization: "token " + GITHUB_TOKEN,
          },
        };
        request(options, async (error, response, body) => {
          if (error) {
          } else {
            let content = JSON.parse(body).content;
            //let repoInfoIndex = repoInfo.length;
            repoInfo.push({
              language: language,
              name: name,
              description: description,
              html_url: html_url,
              content: content,
            });
            // check if repo has portfolio.json, push to reposList
            if (repoInfo.length === len) {
              for (let j = 0; j < len; j++) {
                if (repoInfo[j].content != undefined) {
                  repoInfo[j].content = JSON.parse(atob(repoInfo[j].content));
                  repoList.push(repoInfo[j]);
                }
                if (j == len - 1) {
                  // send reposList to frontend
                  res.send(repoList);
                }
              }
            }
          }
        });
      }
    }
  });
});
// get live project files
app.post("/api/live", async (req, res, next) => {
  const files = req.body.data;
  const data = files.map((file) =>
    file
      .replace("https://github.com/", "https://api.github.com/repos/")
      .replace("blob/master", "contents")
  );
  var options = {
    method: "GET",
    url: data[0],
    headers: {
      "Content-Type": "application/html",
      "User-Agent": "Awesome-Octocat-App",
      authorization: "token " + GITHUB_TOKEN,
    },
  };
  request(options, async (error, response, body) => {
    if (error) {
      console.error("error:", error);
    } else {
      const fileCont = atob(JSON.parse(body).content);
      res.send(fileCont);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
