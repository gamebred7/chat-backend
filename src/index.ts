import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserModel } from "./schemas";
import { UserController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect("mongodb://localhost:5000/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
