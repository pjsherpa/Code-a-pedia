const router = require("express").Router();

//import from models folder
const { Post, User } = require("../models");

//Import cutom middleware
const withAuth = require("../utils/auth");

//Get all posts in homepage

router.get("/", async (req, res) => {
  try {
    // Get all data
    const postData = await Post.findAll({
      include: [User],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    //need to change accroding to handlebar same for line 22 & 23--PJ
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//check which id the route will be located.
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User],
      model: Comment,
    });

    const posts = postData.get({ plain: true });

    res.render("need to change accroding to handlebar--PJ", {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;

// const sequelize = require("../config/connection");
// const { Post, User, Comment } = require("../models");
// const router = require("express").Router();

// // localhost:3001/
// router.get("/", (req, res) => {
//   Post.findAll({
//     attributes: ["id", "title", "body", "created_at"],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       res.render("homepage", { posts, logged_in: req.session.logged_in });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //  localhost:3001/login
// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }
//   res.render("login");
// });

// // localhost:3001/signup
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });



// module.exports = router;