const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { routes } = require("./src/routes");
//const authRouter = require("./src/routes/auth");

// инициализируем приложение
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

//app.use("/auth", authRouter);

// объявим наши  роуты
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alexkozlov:777xaxa777@cluster0.9ybmx.mongodb.net/recipes",
      {}
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
