import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("videos"));
videoRouter.get(routes.upload, (req, res) => res.send("upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("videoDetail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("editVideo"));
videoRouter.get(routes.delete, (req, res) => res.send("deleteVideo"));
export default videoRouter;