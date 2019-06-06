const firebase = require("firebase");

const serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: ""
});

module.exports = firebase;
