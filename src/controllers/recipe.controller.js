const genericCrud = require("./generic.controller");
const { Recipe } = require("../model");

module.exports = {
  ...genericCrud(Recipe),
};
