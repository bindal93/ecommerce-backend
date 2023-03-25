var firebase = require("firebase-admin");

var credentials = require("./certificate.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
});

module.exports = firebase;
