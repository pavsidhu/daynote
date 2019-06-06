const queryString = require("query-string")

const API_KEY = "AIzaSyDOS3mxDhrEBZQ807Xu9rIPWUDjuzCsWVM"

const request = (url, parameters) => {
  parameters["key"] = API_KEY
  return (
    "https://www.googleapis.com" +
    url +
    "/?" +
    queryString.stringify(parameters)
  )
}

const getRandomResponse = responses =>
  responses[Math.floor(Math.random() * (responses.length - 1))]

module.exports = {
  request,
  getRandomResponse
}
