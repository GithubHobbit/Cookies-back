const router = require("express-promise-router")();

const { recipe } = require("../controllers");

router.route("/:id").get(recipe.get);
router.route("/").post(recipe.create);
router.route("/").get(recipe.getAll);
router.route("/:id").put(recipe.update);
router.route("/:id").delete(recipe.delete);

module.exports = router;
