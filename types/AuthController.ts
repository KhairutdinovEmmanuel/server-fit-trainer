import {Request, Response} from "express";

export interface AuthorizationBody {
	email: string;
	password: string;
}

export interface VerifyBody {
	email: string;
	confirmCode: number;
}

export interface ForgotBody {
	email: string;
	password: string;
	confirmCode: number;
}

export type RequestAuth =
	Request<{}, {}, AuthorizationBody, {}>;

export type ResponseAuth =
	Response<{}, {}>;

export type RequestVerify =
	Request<{}, {}, VerifyBody, {}>;

export type ResponseVerify =
	Response<{}, {}>;

export type RequestForgot =
	Request<{}, {}, ForgotBody, {}>;

export type ResponseForgot =
	Response<{}, {}>;
