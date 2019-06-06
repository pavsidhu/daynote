const moment = require("moment")
const firebase = require("../firebase")
const strings = require("../strings")

const UsersRef = firebase.database().ref("users")

const addEntry = app => {
  const credential = firebase.auth.GoogleAuthProvider.credential(
    null,
    app.getUser().accessToken
  )

  firebase.auth().signInWithCredential(credential).then(user => {
    UsersRef.child(user.uid).child("posts").push({
      date: new Date(),
      activities: app.getArgument("activities"),
      fears: app.getArgument("fears"),
      gratitude: app.getArgument("gratitude")
    })

    const currentHour = moment().format("HH")

    const message =
      currentHour >= 17
        ? "have a nice evening 😄"
        : currentHour >= 12 ? "enjoy your afternoon 😄" : "have a great day 😎"

    app.tell("Your entry for today has been added to your journal, " + message)
  })
}

module.exports = addEntry
