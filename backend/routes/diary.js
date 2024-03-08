const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diary')
const auth = require('../middleware/auth')


router.post('/', auth, diaryController.addDiaryToUser)
router.get('/', auth, diaryController.getUserDiary)

module.exports = router;