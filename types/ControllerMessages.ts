import {Request, Response} from "express";

export interface MessageBody {
	type: string;
	email: string;
	link: string;
}

export type RequestVerify =
	Request<{}, {}, MessageBody, {}>;

export type ResponseVerify =
	Response<{}, {}>;

export type RequestForgot =
	Request<{}, {}, MessageBody, {}>;

export type ResponseForgot =
	Response<{}, {}>;
