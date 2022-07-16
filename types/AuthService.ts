import {JwtPayload} from "jsonwebtoken";

export type PayloadTokenType = {
	userId: string;
	role: any[];
} & JwtPayload;
