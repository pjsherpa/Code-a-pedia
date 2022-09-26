const { Post } = require("../models");

const postData = [
  {
    title: "JavaScript Statements",
    body: "Values, Operators, Expressions, Keywords, and Comments.",
    user_id: 1,
  },
  {
    title: "JavaScript Values",
    body: `Fixed values
           Variable values`,
    user_id: 2,
  },
  {
    title: "JavaScript Comments",
    body: `Code after double slashes // or between /* and */ is treated as a comment.`,
    user_id: 3,
  },
  {
    title: "Word3",
    body: "Love it!",
    user_id: 3,
  },
  {
    title: "Word3",
    body: "Love it!",
    user_id: 3,
  },
  {
    title: "Word3",
    body: "Love it!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
