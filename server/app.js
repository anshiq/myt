const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { router, authRouter, authUploadRouter } = require("./routes/tasks");
const cors = require("cors");
const { connect } = require("./db/connect.js");
const { verifyToken } = require("./middleware/middleware");
const app = express();
require("dotenv").config();
app.use(cors());
app.use("/", express.static("./images"));
app.use(fileUpload());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use("/auth", verifyToken, authRouter);
app.use("/upload", verifyToken, authUploadRouter);
const start = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/notesapp");
    app.listen(
      8080
      //console.log(`server up n running on 8080 and connected to db....`)
    );
  } catch (error) {
    //console.log(error);
    //console.log("server did not started because of error in db connection...");
  }
};
start();
