const express = require("express");
const router = express.Router();
const phonesController = require("../controllers/phones.controller");

// get all phones
router.get("/", phonesController.getAllPhones);

// get phone by id
router.get("/:id", phonesController.getPhoneById);

module.exports = router;
