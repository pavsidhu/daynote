const firebase = require("../firebase")
const strings = require("../strings")

const UsersRef = firebase.database().ref("users")

const welcome = app => {
  const credential = firebase.auth.GoogleAuthProvider.credential(
    null,
    app.getUser().accessToken
  )

  firebase.auth().signInWithCredential(credential).then(user => {
    UsersRef.child(user.uid).on("value", snapshot => {
      const doPostsExist = snapshot.val() !== null

      app.ask(
        app
          .buildRichResponse()
          .addSimpleResponse(
            doPostsExist ? strings.welcome.returning : strings.welcome.new
          )
          .addSuggestions([
            doPostsExist ? "📝 Add today's entry" : "📝 Add your first entry",
            doPostsExist ? "🔍 Find an old entry" : null,
            "🤔 I need help"
          ])
      )
    })
  })
}

module.exports = welcome
