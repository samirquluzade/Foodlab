const express = require("express");
const auth = require("../controllers/Auth");
const router = express.Router();

router.post('/signup',auth.signUp);
router.post('/login',auth.login);
router.post('/logout',auth.logout);

module.exports = router;