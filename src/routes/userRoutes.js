import express from "express";
import { createUser, deleteUser, getAllUsers, getUserbyId, updateUser } from "../controller/userController.js";
import validateUser from "../middleware/inputValidator.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user",validateUser, createUser);
router.get("/user/:id", getUserbyId);
router.put("/user/:id",validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
