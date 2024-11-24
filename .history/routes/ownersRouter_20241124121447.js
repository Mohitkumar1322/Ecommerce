const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');


if(process.env.NODE_ENV === "development"){
    router.post("/create", async function (req, res) {
       let owners = await ownerModel.find();
       if(owners.length >0){
        return res
        .send(503)
        .send("you  dont have permision");
       }

       owner

       res.send("we can create a new owner");
       
    });
};

router.get("/", function (req, res) {
    res.send('Owners Router');
});





module.exports = router;
