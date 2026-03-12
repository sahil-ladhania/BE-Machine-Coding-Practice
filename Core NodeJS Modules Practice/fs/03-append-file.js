const fs = require("fs");
const path = require("path");

function appendToFile(filePath, content) {}

appendToFile(path.join(__dirname, "input.txt"), "Appended line");
