const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  recipes: [
    {
      type: ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = model("Category", schema);
