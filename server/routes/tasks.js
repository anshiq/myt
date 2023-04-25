const express = require("express");
const {
  getOneTask,
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  signup,
  login,
  resetPass,
  getUserVideos,
  getThunb,searchRecommendation
} = require("../controllers/functions");
const router = express.Router();
const authRouter = express.Router();
const authUploadRouter = express.Router();
router.route("/all").get(getAllTask);
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/reset").post(resetPass);
router.route("/thumb/:id").get(getThunb);
router.route("/one/:id").get(getOneTask);
router.route('/search').post(searchRecommendation)
authRouter.route("/change").patch(updateTask).delete(deleteTask);
authRouter.route("/uservideos").post(getUserVideos);
authUploadRouter.route("/").post(createTask);
module.exports = { router, authRouter, authUploadRouter };
