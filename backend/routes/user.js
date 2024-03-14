const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const userController = require("../controllers/user");

router.get("/", auth, userController.getAllUsers);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
