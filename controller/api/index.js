const router = require("express").Router();
const userRouter = require("./user-routes");
const postRoutes = require("./post-routes");


//Import our modular routers for users to the post.
router.use("/user", userRouter);
router.use("/post", postRoutes);

module.exports = router;
