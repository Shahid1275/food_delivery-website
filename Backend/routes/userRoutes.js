import express from 'express';
import {registerUser,loginUser} from "../controllers/userController.js";

const userRouter = express.Router();

// user registration

userRouter.post('/register', registerUser);

// user login

userRouter.post('/login', loginUser);

export default userRouter;