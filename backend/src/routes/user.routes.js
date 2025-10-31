import express from "express";
import { createUser, listUsers } from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/validateUser.js";

const router = express.Router();
router.post("/", validateUser, createUser);
router.get("/", listUsers);

export default router;
