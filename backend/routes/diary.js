const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diary')
const auth = require('../middleware/auth')


router.post('/', auth, diaryController.addDiaryToUser)
router.get('/', auth, diaryController.getUserDiary)
router.post('/pages', auth, diaryController.addEntry)

module.exports = router;