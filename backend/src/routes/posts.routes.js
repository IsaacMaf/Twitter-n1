import express from "express";
import { createPost, listPosts } from "../controllers/posts.controller.js";

const router = express.Router();
router.post("/", createPost);
router.get("/", listPosts);

export default router;
