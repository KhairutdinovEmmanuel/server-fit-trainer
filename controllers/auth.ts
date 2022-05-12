import { Router } from "express";
import {
	validationRegister,
} from "../validations/auth";
import {
	generateAccessToken,
	generateRefreshToken
} from "../services/auth";
import {
	RequestRegister, ResponseRegister
} from "../types/ControllerAuth";

const router = Router();

router.post(
	'/register',
	validationRegister,
	(req: RequestRegister, res: ResponseRegister) => {
		try {
			const { email, password } = req.body;
			// сheck if there is a user with the same email ...
			// create user ...
			const user = { id: "1", role: [] };
			const access_token = generateAccessToken(user);
			const refresh_token = generateRefreshToken(user);
			res.cookie("access_token", access_token, { httpOnly: true });
			res.cookie("refresh_token", refresh_token, { httpOnly: true });
			return res.status(200).json({ email, password });
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
);

export default router;
