const { EventEmitter } = require("events");
const fs = require("fs");
const path = require("path");

class Logger extends EventEmitter {
  log(message) {}
}

const logger = new Logger();

// Register listener and write to file here

logger.log("Server started");
logger.log("User logged in");
