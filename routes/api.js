const express = require("express");
const router = express.Router();  
const User = require("../models/user"); 



//********************************************************************************************* */
    //  R O U T E S _ _ F O R _ _ U S E R S _ _ C O L L E C T I O N

//********************************************************************************************* */


// Get list of all users from the database
router.get("/users", function(req, res){
    res.send({type: "GET"});
});


// Add a new user to the database 
router.post("/users", function(req, res, next){
    console.log(req.body);
    User.create(req.body).then(function(user){
    res.send(user); 
    }).catch(next); 
    
});


// Update a user in the database
router.get("/users/:id", function(req, res, next){
    res.send({type: "PUT"});
});



// Delete a user from the database
router.get("/users/:id", function(req, res, next){
    res.send({type: "DELETE"});
});




//********************************************************************************************* */
    //  R O U T E S _ _ F O R _ _ R E C I P E S _ _ C O L L E C T I O N

//********************************************************************************************* */





//********************************************************************************************* */
    //  R O U T E S _ _ F O R _ _ C O M M E N T S _ _ C O L L E C T I O N

//********************************************************************************************* */






//********************************************************************************************* */
    //  R O U T E S _ _ F O R _ _ C A T E G O R I E S _ _ C O L L E C T I O N

//********************************************************************************************* */
module.exports= router;