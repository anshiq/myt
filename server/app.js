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
app.get('/hi',(req,res)=>{
  res.send("hi")
})
const start = async () => {
  try {
    const db_url = process.env.mongod_url;
    const port = process.env.PORT;
    await connect(db_url);
    app.listen(port, () =>
      console.log(`server up n running on ${port} and connected to db....`)
    );
  } catch (error) {
    console.log(error);
    console.log("server did not started because of error in db connection...");
  }
};
start();
