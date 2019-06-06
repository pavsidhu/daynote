const strings = require("../strings")

const help = app => {
  app.ask(
    app
      .buildRichResponse()
      .addSimpleResponse(strings.help)
      .addSuggestions(["📝 Add today's entry"])
      .addSuggestionLink(
        "the Day Note app",
        "https://play.google.com/store/apps/details?id=com.pavsidhu.daynote"
      )
  )
}

module.exports = help
