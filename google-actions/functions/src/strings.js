const welcome = {
  new: {
    speech:
      "Hello I'm here to help you record your day. Would you like to create your first entry?",
    displayText:
      "Hello 👋 I'm here to help you record your day. What would you like to do?"
  },
  returning: {
    speech: "Welcome back did you want to add today's journal entry?",
    displayText: "Welcome back 😄 did you want to add today's journal entry?"
  }
}

const general = {
  noInputs: [
    "I didnt catch that can you say it again",
    "Sorry, I couldn't hear you",
    "Can you repeat what you said?"
  ],
  unhandled:
    "Hey, I'm incapable of conversation, but I can help you update your journal!"
}

const help =
  "I'm able to help you keep a daily journal of your life through Google Assistant. I'm available as an app for Android too."

const error = {
  speech: "Sorry, I'm having issues at the moment. Please ask me again later.",
  displayText:
    "Sorry, I'm having issues at the moment 🤒 Please ask me again later."
}

const readEntryReject = [
  "Okay, is there anything else I can do?",
  "Alright, is there something else you need?"
]

module.exports = {
  general,
  welcome,
  help,
  error,
  readEntryReject
}
