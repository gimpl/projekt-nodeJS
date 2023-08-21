import express from "express";
import loginController from "../controllers/loginControllers.js"

const route = express.Router();

route.post("/", loginController.creatUser);

route.post("/login", loginController.checkEmailAndPass);

export default route;
