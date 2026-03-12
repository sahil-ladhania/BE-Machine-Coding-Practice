const { EventEmitter } = require("events");

const emitter = new EventEmitter();

function registerGreetListener(emitter) {}

function emitGreet(emitter, name) {}

registerGreetListener(emitter);
emitGreet(emitter, "Alice");
