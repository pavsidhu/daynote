const firebase = require("../firebase")
const strings = require("../strings")
const {getRandomResponse} = require("../utils")

const UsersRef = firebase.database().ref("users")

const readEntryReject = app => {
  const credential = firebase.auth.GoogleAuthProvider.credential(
    null,
    app.getUser().accessToken
  )

  firebase.auth().signInWithCredential(credential).then(user => {
    UsersRef.child(user.uid).on("value", snapshot => {
      const doPostsExist = snapshot.val() !== null

      const suggestions = [
        doPostsExist ? "📝 Add today's entry" : "📝 Add your first entry",
        doPostsExist ? "🔍 Find an old entry" : null,
        "🤔 I need help"
      ]

      app.ask(
        app
          .buildRichResponse()
          .addSimpleResponse(getRandomResponse(strings.readEntryReject))
          .addSuggestions(suggestions)
      )
    })
  })
}

module.exports = readEntryReject
