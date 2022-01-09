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
  timeToDo: {
    type: Number,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
});

module.exports = model("Recipe", schema);
