const express = require("express"); 
const { register, login, logout } = require("../controllers/auth.controller");

const router = express.Router(); 

router.get("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router; 