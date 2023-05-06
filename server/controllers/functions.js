const fs = require("fs");
const path = require("path");
const { TaskSchemas, LoginSchemas } = require("../models/schema");
const {
  encryptPassword,
  comparePassword,
  sendJwtToken,
} = require("../middleware/middleware");
// const { convertVideoFormat, convertImageFormat } = require("../middleware/fileFormatCheck");
const getThunb = (req, res) => {
  let fileName = `${req.params.id}.jpg`;
  const currentDirectory = process.cwd(); //like a pwd in bash.
  const filePath = path.join(`${currentDirectory}/images`, fileName); // Construct the file path
  //console.log(filePath)
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
};

const getAllTask = async (req, res) => {
  const data = await TaskSchemas.find({});
  //  console.log(data);
  res.json(data);
};
const searchRecommendation = async (req, res) => {
  try {
    const recomendation = await TaskSchemas.find({
      $or: [
        { name: { $regex: new RegExp(req.body.inputText, "i") } },
        { description: { $regex: new RegExp(req.body.inputText, "i") } },
      ],
    });
    // console.log(recomendation, req.body.inputText);
    res.send(recomendation);
  } catch (error) {
    res.send({ error: true });
  }
};
const getOneTaskDetails = async (req, res) => {
  try {
    const id = req.body.id;
    // console.log(id)
    const oneTaskDetails = await TaskSchemas.findOne({ _id: id });
    res.send(oneTaskDetails).status(200);
  } catch (error) {
    res.send("task not found").status(400);
  }
};
const getOneTask = async (req, res) => {
  const fileName = `${req.params.id}.mp4`; // Get the file name from the request parameter
  const currentDirectory = process.cwd(); //like a pwd in bash.
  const filePath = path.join(`${currentDirectory}/videos`, fileName); // Construct the file path
  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "video/mp4");
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found"); // If the file doesn't exist, send a 404 error response
  }
};
const createTask = async (req, res) => {
  // console.log(req.body,req.user);
  const videoFile = req.files.image;
  const imageFile = req.files.video;
  if (
    !imageFile ||
    !videoFile ||
    req.body.name == "" ||
    req.body.description == ""
  ) {
    return res.status(400).send("Each field is required");
  }
  const vidDetails = await TaskSchemas.create({
    name: req.body.name,
    description: req.body.description,
    userId: req.user,
  });
  imageFile.mv(`videos/${vidDetails._id}.mp4`, (error) => {
    if (error) {
      console.error(`Error uploading file 1: ${error}`);
      return res.status(500).send("Error uploading file 1");
    }
    videoFile.mv(`images/${vidDetails._id}.jpg`, (error) => {
      if (error) {
        console.error(`Error uploading file 2: ${error}`);
        return res.status(500).send("Error uploading file 2");
      }
      //  const convertVideo =   convertVideoFormat(`videos/${vidDetails._id}.mp4`)
      //    const convertImage = convertImageFormat(`images/${vidDetails._id}.jpg`)
      //    if (!convertImage && !convertVideo)
      //  {
      //      console.log(convertVideo )
      //      console.log(convertImage)
      //    res.status(400).send("files are corrupted or something");
      //      return
      //   }

      res.status(200).send("Files uploaded successfully");
    });
  });
};
const updateTask = async (req, res) => {
  const { _id: _id } = req.params;
  const { name, description } = req.body;
  try {
    const data = await TaskSchemas.findOneAndUpdate(
      { _id: _id },
      { name: name, description: description },
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(data);
  } catch (error) {
    res.send({ existTask: false });
  }
};
const deleteTask = async (req, res) => {
  const { id: id } = req.headers;
  // console.log(id);
  try {
    const data = await TaskSchemas.findOneAndDelete({
      _id: id,
      userId: req.user,
    });
    res.send({ delete: true, name: data.name });
  } catch (error) {
    res.send({ delete: false, name: "" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await LoginSchemas.findOne({ email: email });
    const result = await comparePassword(password, data.password);
    if (result) {
      const token = sendJwtToken(data._id, data.name);
      res.send({
        token: token,
        login: true,
        msg: "logged in successfully",
        name: data.name,
        id: data._id,
      });
    } else {
      res.send({ token: "", login: false, msg: "Credentials are wrong" });
    }
  } catch (err) {
    res.send({ token: "", login: false, msg: "Issue on server side" });
  }
};
const signup = async (req, res) => {
  let { email, password, name } = req.body;
  password = await encryptPassword(password);
  try {
    const user = await LoginSchemas.create({
      name: name,
      email: email,
      password: password,
    });
    if (user) {
      res.json({ signup: true });
    } else {
      res.send({ signup: false });
    }
  } catch (error) {
    res.send({ signup: false });
  }
};
const getUserVideos = async (req, res) => {
  let user;
  if (req.user === undefined) {
    user = req.body.user;
  } else {
    user = req.user;
  }
  // console.log(user)
  try {
    const userVideo = await TaskSchemas.find({ userId: user });
    if (userVideo) {
      // console.log(userVideo);
      res.send(userVideo);
    } else {
      res.send({ exist: false });
    }
  } catch (error) {
    res.send({ exist: false });
  }
};
module.exports = {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
  signup,
  login,
  getUserVideos,
  getThunb,
  searchRecommendation,
  getOneTaskDetails,
};
