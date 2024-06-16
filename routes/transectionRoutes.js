const express = require("express");
const { addTransection, getAllTransection,editTransection,deleteTransection } = require("../controllers/transectionCtrl");


//router object
const router = express.Router();

//routes
//add transection POST method
router.post("/add-transections",addTransection)
//edit transection POST method
router.post("/edit-transections",editTransection)
//delete transection POST method
router.post("/delete-transections",deleteTransection)
//get transection
router.post("/get-transections",getAllTransection)

module.exports = router;
