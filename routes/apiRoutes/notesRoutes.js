const router = require("express").Router();
//const { filterByQuery, findById, createNewAnimal, validateAnimal, } = require("../../lib/animals");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})


module.exports = router;