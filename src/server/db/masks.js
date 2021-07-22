const Sequelize = require("Sequelize");
const db = require("./database");

const Mask = db.define("mask", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      isIn: [[0, 1, 2, 3, 4, 5]],
    },
  },
});

module.exports = Mask;
