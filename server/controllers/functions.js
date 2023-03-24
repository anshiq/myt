const fs = require("fs");
const path = require("path");
const { TaskSchemas, LoginSchemas } = require("../models/schema");
const {
  encryptPassword,
  comparePassword,
  sendJwtToken,
} = require("../middleware/middleware");
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
  res.json(data);
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
  console.log("hi ther");
  const vidDetails = await TaskSchemas.create({
    name: req.body.name,
    description: req.body.description,
  });
  const videoFile = req.files.image;
  const imageFile = req.files.video;
  if (!imageFile || !videoFile) {
    return res.status(400).send("Both video files must be uploaded");
  }
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
      res.status(200).send("Files uploaded successfully");
    });
  });
};
const updateTask = async (req, res) => {
  const { _id: _id } = req.params;
  const { name, description } = req.body;
  const data = await TaskSchemas.findOneAndUpdate(
    { _id: _id },
    { name: name, description: description },
    {
      new: true,
      runValidators: true,
    }
  );
  res.send(data);
};
const deleteTask = async (req, res) => {
  const { _id: _id } = req.params;
  console.log(_id);
  const data = await TaskSchemas.findOneAndDelete({ _id: _id });
  res.send(data);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await LoginSchemas.findOne({ email: email });
    const result = await comparePassword(password, data.password);
    if (result) {
      //console.log(data._id);
      const token = sendJwtToken(data._id, data.name);
      res.send({ token: token, login: true });
      //console.log("loggedin");
    }
  } catch (err) {
    res.send({ token: "", login: false });
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
      console.log(user);
    } else {
      res.send({ signup: false });
    }
  } catch (error) {
    res.send({ signup: false });
  }
};
const resetPass = async (req, res) => {
  return true;
};
const getUserDetails = async (req, res) => {
  const user = await LoginSchemas.findOne({ _id: req.user });
  if (user) {
    const data = {
      name: user.name,
      exist: true,
    };
    res.send(data);
  } else {
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
  resetPass,
  getUserDetails,
  getThunb,
};
