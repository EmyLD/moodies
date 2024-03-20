const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const utils = require("../utils/checkPwd");

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user == null) {
      return res.json(`${req.body.email} doesn't exist.`);
    } else {
      bcrypt.compare(req.body.password, user.password).then((hash) => {
        if (hash) {
          res.status(200).json({
            userId: user._id,
            username: user.username,
            token: jwt.sign(
              { userId: user._id, username: user.username },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "24h" }
            ),
            message: "Mot de passe ok",
          });
        } else {
          res.status(400).json({ message: "Wrong password" });
        }
      });
    }
  });

  // .then((user) => {
  //   if (!user) {
  //     return res
  //       .status(401)
  //       .json({ message: "Paire login/mot de passe incorrecte" });
  //   }
  //   bcrypt
  //     .compare(req.body.password, user.password)
  //     .then((valid) => {
  //       if (!valid) {
  //         return res
  //           .status(401)
  //           .json({ message: "Paire login/mot de passe incorrecte" });
  //       } else {
  //         res.status(200).json({
  //           userId: user._id,
  //           username: user.username,
  //           token: jwt.sign(
  //             { userId: user._id, username: user.username },
  //             "RANDOM_TOKEN_SECRET",
  //             { expiresIn: "24h" }
  //           ),
  //         });
  //       }
  //     })
  //     .catch((error) => res.status(500).json({ error }));
  // })
  // .catch((error) => res.status(500).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
