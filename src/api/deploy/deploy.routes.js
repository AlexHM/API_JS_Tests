import { Router } from "express";
import { deploy } from "./controllers/deploy.controller.js";

const deployRoutes = Router();

deployRoutes.get("/", deploy);

export default deployRoutes;
