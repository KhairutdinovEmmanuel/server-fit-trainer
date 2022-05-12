import { Router } from "express";
import {
	validationAuth,
	validationVerify,
	validationForgot
} from "../validations/auth";
import {
	generateAccessToken,
	generateRefreshToken
} from "../services/auth";
import {
	RequestAuth, ResponseAuth,
	RequestVerify, ResponseVerify,
	RequestForgot, ResponseForgot,
} from "../types/ControllerAuth";

const router = Router();

router.post(
	'/register',
	validationAuth,
	(req: RequestAuth, res: ResponseAuth) => {
		try {
			// check if there is a user with the same email ...
			// create user ...
			const user = { id: "1", role: [] };
			const access_token = generateAccessToken(user);
			const refresh_token = generateRefreshToken(user);
			res.cookie("access_token", access_token, { httpOnly: true });
			res.cookie("refresh_token", refresh_token, { httpOnly: true });
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
);

router.post(
	'/login',
	validationAuth,
	(req: RequestAuth, res: ResponseAuth) => {
		try {
			// check if there is a user with the same email ...
			// check user is confirmed email ...
			// get user by email ...
			const user = { id: "1", role: [] };
			const access_token = generateAccessToken(user);
			const refresh_token = generateRefreshToken(user);
			res.cookie("access_token", access_token, { httpOnly: true });
			res.cookie("refresh_token", refresh_token, { httpOnly: true });
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
)

router.post(
	'/verify',
	validationVerify,
	(req: RequestVerify, res: ResponseVerify) => {
		try {
			// check if there is a user with the same email ...
			// check user is not confirmed email ...
			// set user confirmed.email: true ...
			// get user by email ...
			const user = { id: "1", role: [] };
			const access_token = generateAccessToken(user);
			const refresh_token = generateRefreshToken(user);
			res.cookie("access_token", access_token, { httpOnly: true });
			res.cookie("refresh_token", refresh_token, { httpOnly: true });
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
)

router.put(
	'/forgot',
	validationForgot,
	(req: RequestForgot, res: ResponseForgot) => {
		try {
			// check if there is a user with the same email ...
			// check user is confirmed email ...
			// set user confirmed.changedPassword: true ...
			// get user by email ...
			const user = { id: "1", role: [] };
			const access_token = generateAccessToken(user);
			const refresh_token = generateRefreshToken(user);
			res.cookie("access_token", access_token, { httpOnly: true });
			res.cookie("refresh_token", refresh_token, { httpOnly: true });
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
);

export default router;
