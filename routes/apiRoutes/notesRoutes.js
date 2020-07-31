const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})

router.post("/notes", (req, res) => {
    //set id randomly
    const note = createNewNote(req.body, notes)
    res.json(note);
})


module.exports = router;