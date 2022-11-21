const string = "Hello Rahul!";
const greeting = require("../greeting/index.js");
const message = string + " " + greeting;
module.exports = message;
