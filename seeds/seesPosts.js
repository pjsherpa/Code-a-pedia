const { Post } = require('../models');

const postData = [
    {
        title:"Word1",
        content:"Great!",
        user_id: 1
    },
    {
        title:"Word2",
        content:"Awsome",
        user_id:2
    },
    {
        title:"Word3",
        content:"Love it!",
        user_id:3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;