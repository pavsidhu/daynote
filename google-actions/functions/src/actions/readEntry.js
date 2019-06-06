const moment = require("moment")
const firebase = require("../firebase")
const strings = require("../strings")

const UsersRef = firebase.database().ref("users")

const readEntry = app => {
  const credential = firebase.auth.GoogleAuthProvider.credential(
    null,
    app.getUser().accessToken
  )

  firebase.auth().signInWithCredential(credential).then(user => {
    UsersRef.child(user.uid).child("posts").on("value", snapshot => {
      const posts = snapshot.val()

      for (let post in posts) {
        if (posts[post].date.slice(0, 10) === app.getArgument("date")) {
          return app.tell(
            posts[post].activities,
            posts[post].fears,
            posts[post].gratitude
          )
        }
      }
    })

    app.setContext("ReadEntry-followup", 2)

    app.ask(
      app
        .buildRichResponse()
        .addSimpleResponse(
          "I couldn't find an entry for " +
            moment(app.getArgument("date"), "YYYY-MM-DD").format("Do MMMM YYYY")
        )
        .addSimpleResponse("Would you like to try another date?")
        .addSuggestions(["👍🏼 Yes", "👎🏼 Nope"])
    )
  })
}

module.exports = readEntry
