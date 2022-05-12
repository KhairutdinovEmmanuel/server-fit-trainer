import jwt from "jsonwebtoken";
import { PayloadTokenType } from "../types/ServiceAuth";

const SECRET_TOKEN_KEY: string = process.env.SECRET_TOKEN_KEY || "SECRET_KEY";

export const generateAccessToken = (payload: PayloadTokenType): string => {
	return jwt.sign(payload, SECRET_TOKEN_KEY, { expiresIn: "4h" });
}

export const generateRefreshToken = (payload: PayloadTokenType): string => {
	return jwt.sign(payload, SECRET_TOKEN_KEY, { expiresIn: "7d" });
}