const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/characters.controller");

// return all characters
router.route("/").get(charactersController.getAllCharacters);

// create character
router.post("/");

// return character by id
router.get("/:id");

// update character by id
router.put("/:id");

//delete character by id
router.delete("/:id");

// return rick and morty characters ... moha ha ha ha
router.get("/rickAndMorty", charactersController.getAllRickAndMortyCharacters);

module.exports = router;
