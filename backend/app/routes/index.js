const express = require("express");
const router = express.Router();
const characterRoutes = require("./characters.routes");

router.use("/characters", characterRoutes);

module.exports = router;
