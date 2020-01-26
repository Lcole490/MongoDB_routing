const express = require("express");
const PORT = 3000;

// Set up express app

const app = express();

// Listen for requests

app.listen(process.env.port|| PORT, function(){
    console.log("App running on port " + PORT + "!")
});