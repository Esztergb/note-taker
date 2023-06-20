const express = require('express');
const router = express.Router();
const path = require('path');

//return index.html

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../routes/public/index.html"));
});

//reurn notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/../routes/public/notes.html"));
});

module.exports = router;