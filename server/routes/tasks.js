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
  getUserDetails,
  getThunb,
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
authRouter
  .route("/change/:_id")
  .patch(updateTask)
  .delete(deleteTask)
authRouter.route("/getDetails").post(getUserDetails);
authUploadRouter.route("/").post(createTask);
module.exports = { router, authRouter, authUploadRouter };
