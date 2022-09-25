const { User } = require("../models");

const userData = [
  {
    username: "PJ",
    useremail: "pj@gmail.com",
    password: "1234",
  },
  {
    username: "Kai",
    useremail: "kai@gmail.com",
    password: "1234",
  },
  {
    username: "Sav",
    useremail:"sav@gmail.com",
    password: "1234",
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUsers;
