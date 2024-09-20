const express = require("express");
const register = require("../controllers/userControllers/register");
const login = require("../controllers/userControllers/login");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
