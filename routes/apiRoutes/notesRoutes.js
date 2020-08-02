const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db");
const uniqid = require("uniqid")

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})

router.post("/notes", (req, res) => {
    //set id randomly
    req.body.id = uniqid()
    const note = createNewNote(req.body, notes)
    res.json(note);
})

//router.delete("/notes/:id", (req, res) => {
    //otes.splice(req.body.id, 1)
//})


module.exports = router;