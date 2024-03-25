const Diary = require("../models/diary");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Add new Diary to User
exports.addDiaryToUser = (req, res) => {
  const userId = jwt.decode(req.headers.authorization.split(" ")[1]);
  const diary = new Diary({
    ...req.body,
    user_id: userId.userId,
  });

  diary
    .save()
    .then(() => res.status(201).json({ message: "Journal créé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getUserDiary = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const diary = await Diary.findOne({ user_id: req.params.id });

    const data = {
      author: user.username,
      diary: diary.title,
      created: diary.date,
    };

    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "You dont have a diary" });
  }
};
