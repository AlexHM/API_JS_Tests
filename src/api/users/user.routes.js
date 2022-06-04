import { Router } from "express";
import { findUser } from "./controllers/findUser.controller.js";
import { newUser } from "./controllers/newUser.controller.js";

const userRoutes = Router();

userRoutes.post("/", newUser);
userRoutes.get("/:idUser", findUser);

export default userRoutes;
