const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../middleware/authentication");

const {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", authenticateUser, logout);
router.post("/verifyEmail", verifyEmail);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);

module.exports = router;
