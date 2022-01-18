const Router = require("express");
const router = new Router();
const { auth } = require("../controllers");
const { check } = require("express-validator");
//const authMiddleware = require("../../middleware/authMiddleware");
const roleMiddleware = require("../../middleware/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 18 символов"
    ).isLength({ min: 8, max: 20 }),
  ],
  auth.registration
);
router.post("/login", auth.login);
router.get("/users", roleMiddleware(["USER", "ADMIN"]), auth.getUsers);

module.exports = router;
