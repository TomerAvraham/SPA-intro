const express = require("express");
const router = express.Router();
const characterRoutes = require("./characters.routes");
const phoneRoutes = require("./phones.routes");

router.use("/characters", characterRoutes);
router.use("/phones", phoneRoutes);

module.exports = router;
