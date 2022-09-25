const { User } = require("../models");

const userData = [
  {
    username: "PJ",
    password: "1234",
  },
  {
    username: "Kai",
    password: "1234",
  },
  {
    username: "Sav",
    password: "1234",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
