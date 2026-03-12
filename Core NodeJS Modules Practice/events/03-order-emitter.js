const { EventEmitter } = require("events");

const orderEmitter = new EventEmitter();

function registerOrderListener(emitter) {}

function placeOrder(emitter, order) {}

registerOrderListener(orderEmitter);
placeOrder(orderEmitter, { id: 1, item: "Laptop", quantity: 2 });
