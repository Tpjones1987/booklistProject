const express = require("express");
const router = express.Router();

const books = require("./booksController");

router.get("/book", books.index);
router.post("/book/create", books.create);
router.get("/book/:id", books.show);
router.delete("/book/:id", books.delete);
router.put("/book/:id", books.update);

module.exports = router;
