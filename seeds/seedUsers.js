const { User } = require("../models");

const userData = [
  {
    username: "PJ",
    password: "12345678",
  },
  {
    username: "Kai",
    password: "12345678",
  },
  {
    username: "Sav",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
