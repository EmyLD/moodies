const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/diary");

router.post("/", diaryController.addDiaryToUser);
router.get("/:id", diaryController.getUserDiary);

module.exports = router;
