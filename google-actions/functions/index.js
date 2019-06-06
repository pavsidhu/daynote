const functions = require("firebase-functions")
const {ApiAiApp} = require("actions-on-google")
const actionMap = require("./src/actions")

const app = functions.https.onRequest((request, response) => {
  const app = new ApiAiApp({request, response})
  app.handleRequest(actionMap)
})

module.exports = {app}
