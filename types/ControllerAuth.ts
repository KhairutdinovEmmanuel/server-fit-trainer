import {Request, Response} from "express";

export interface AuthorizationBody {
	email: string;
	password: string;
	confirmCode: number;
}

export type RequestRegister =
	Request<{}, {}, Pick<AuthorizationBody, "email" | "password">, {}>;

export type ResponseRegister =
	Response<{}, {}>;