const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// localhost:3001/dashboard/
// router.get("/codeword", async (req, res) => {
//   try {
//      // Get all data
//      const postData = await Post.findAll({
      
//       include: [User],
//     });
//     const posts = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//       res.render("codeword", {
//       posts,
//       layouts: "dashboard",
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
     
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("allpost", {
      posts,
      layout: "dashboard",
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("jsnewposts", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("editposts", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
