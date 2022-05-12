import {Request, Response} from "express";

export interface AuthorizationBody {
	email: string;
	password: string;
}

export type RequestAuth =
	Request<{}, {}, Pick<AuthorizationBody, "email" | "password">, {}>;

export type ResponseAuth =
	Response<{}, {}>;