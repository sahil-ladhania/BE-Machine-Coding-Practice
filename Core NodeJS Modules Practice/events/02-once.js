const { EventEmitter } = require("events");

const emitter = new EventEmitter();

function registerOnceListener(emitter) {}

function emitGreetTwice(emitter, name) {}

registerOnceListener(emitter);
emitGreetTwice(emitter, "Alice");
