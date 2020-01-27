const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/api"); // Api routes are able to be used by importing this
const PORT = 3000;

// Set up express app

const app = express();


//Connect to MongoDB

mongoose.connect("mongodb://localhost/recipesdb",
 { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true},
 () => console.log("Connection to DB Successful!")
  );


mongoose.Promise = global.Promise;

// app.use(bodyParser.json());

app.use(express.json());


//Initialize routes
app.use("/api", routes); // Adding "/api" allows for ommission in api route filenames from api.js 

// Error handling Middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(400).send({error: err.message});
})


// Listen for requests, basically starts the server

app.listen(process.env.port|| PORT, function(){
    console.log("App running on port " + PORT + "!")
});