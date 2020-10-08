/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const tiny = require("tiny-json-http");

const client_id = process.env.OAUTH_CLIENT_ID;
const client_secret = process.env.OAUTH_CLIENT_SECRET;
const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`;
const tokenUrl = 'https://github.com/login/oauth/access_token';

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// NetlifyCMS doesn't use this root page. It's only for dev purposes
app.get('/github', (req, res) => {
    res.send(`<a href="${authUrl}">Login with Github</a>`);
});

// NetlifyCMS expects to land on a page at /auth.
app.get('/github/auth', (req, res) => res.redirect(authUrl));

app.get('/github/auth/callback', async (req, res) => {
    const data = {
        code: req.query.code,
        client_id,
        client_secret,
    };

    try {
        const { body } = await tiny.post({
            url: tokenUrl,
            data,
            headers: {
                // GitHub returns a string by default, ask for JSON to make the reponse easier to parse.
                Accept: 'application/json',
            },
        });

        const postMsgContent = {
            token: body.access_token,
            provider: 'github',
        };

        // This is what talks to the NetlifyCMS page. Using window.postMessage we give it the
        // token details in a format it's expecting
        const script = `
    <script>
    (function() {
      function recieveMessage(e) {
        console.log("recieveMessage %o", e);
        
        // send message to main window with the app
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify(postMsgContent)}', 
          e.origin
        );
      }

      window.addEventListener("message", recieveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })()
    </script>`;

        return res.send(script);
    } catch (err) {
        // If we hit an error we'll handle that here
        console.log(err);
        res.redirect('/?error=😡');
    }
});

app.listen(3000, function () {
    console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
