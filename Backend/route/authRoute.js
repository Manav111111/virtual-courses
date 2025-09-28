import express from "express"
import { logout } from "../controller/authController.js"
import { signUp } from "../controller/authController.js"
import { login } from "../controller/authController.js"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

export default authRouter