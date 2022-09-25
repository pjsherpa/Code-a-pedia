const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// localhost:3001/dashboard/
router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("need to change accroding to handlebar--PJ", {
      posts,
      layout: "need to change accroding to handlebar--PJ",
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
