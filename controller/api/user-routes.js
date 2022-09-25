const router = require("express").Router();
const { User } = require("../../models");

// Create new user
// localhost:3001/api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  console.log('req.body',req.body)
  try {
    const userData = await User.findOne({
      where: {
        useremail: req.body.useremail,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.useremail = userData.useremail;
      req.session.logged_in = true;

      console.log("user", userData);
      res.status(200).json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(err);
    res.status(404).end();
  }
});

module.exports = router;
