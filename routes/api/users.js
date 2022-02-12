const express = require("express");
const router = express.Router();
const gameCtrl = require("../../controllers/Game");
const userCtrl = require("../../controllers/User");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", userCtrl.create);
router.post("/games/new", gameCtrl.create);
// POST /api/users/login
router.post("/login", userCtrl.login);

// GET /api/users/check-token
router.get("/check-token", ensureLoggedIn, userCtrl.checkToken);
router.put("/admin", userCtrl.edit);
module.exports = router;
