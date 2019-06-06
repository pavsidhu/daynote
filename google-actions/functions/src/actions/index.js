const welcome = require("./welcome")
const addEntry = require("./addEntry")
const readEntry = require("./readEntry")
const readEntryReject = require("./readEntryReject")
const help = require("./help")

const actionMap = new Map()

actionMap.set("input.welcome", welcome)
actionMap.set("add.entry", addEntry)
actionMap.set("read.entry", readEntry)
actionMap.set("read.entry-reject", readEntryReject)
actionMap.set("help", help)

module.exports = actionMap
