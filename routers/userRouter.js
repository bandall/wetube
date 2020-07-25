import express from "express";
import routes from "../routes";
import videoRouter from "./videoRouter";
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
userRouter.get(routes.uesrDetail, (req, res) => res.send("userDetail"));
userRouter.get(routes.editProfile, (req, res) => res.send("editProfile"));
userRouter.get(routes.changePassword, (req, res) => res.send("changePassword"));
export default userRouter;

