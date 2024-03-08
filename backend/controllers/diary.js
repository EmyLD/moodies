const Diary = require('../models/diary');
const DiaryEntry = require('../models/diaryEntry');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Add new Diary to User 
exports.addDiaryToUser = (req, res) => {
    const userId = jwt.decode(req.headers.authorization.split(' ')[1]);
    const diary = new Diary({
        ...req.body,
        user_id: userId.userId
    })

    diary.save()
        .then(() => res.status(201).json({ message: 'Journal créé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getUserDiary = async (req, res) => {
    const userId = jwt.decode(req.headers.authorization.split(' ')[1])
    const user = await User.findById(userId.userId)
    const diary = await Diary.findOne({ user_id: userId.userId })
    const data =
    {
        author: user.username,
        diary: diary.title,
        created: diary.date
    }
    try {
        res.status(200).json(data)
    } catch (error) {
        res.json(error)
    }
};

exports.addEntry = async (req, res) => {
    const userId = jwt.decode(req.headers.authorization.split(' ')[1])
    const diary = await Diary.findOne({ user_id: userId.userId })
    const diaryId = diary._id;
    const newEntry = new DiaryEntry({
        ...req.body,
        diary: diaryId
    })

    newEntry.save()
        .then(res.json(newEntry))
        .catch(error => res.json(error))
}