const express = require('express');
const app = express();
const port = 3000;

app.get('/' , () => {
    console.log("Test API...");
});

app.listen(port , () => {
    console.log("App Listening...");
});