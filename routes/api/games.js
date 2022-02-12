const express = require("express");
const router = express.Router();
const gameCtrl = require("../../controllers/Game");

router.post("/new", gameCtrl.create);
router.get("/", gameCtrl.index);
router.get("/:id", gameCtrl.detail);
router.delete("/", gameCtrl.delete);
module.exports = router;
