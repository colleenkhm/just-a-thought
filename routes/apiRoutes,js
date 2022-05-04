const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();

// TODO: create route to get information from page
router.get("/notes", (req, res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
})
// TODO: create route to post information to page
router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
})

// TODO: create route to delete information from page
router.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const deleteNote = notes.filter(( dltNote ) => dltNote.id !== req.params.id)

    res.json(deleteNote);
})

module.exports = router;