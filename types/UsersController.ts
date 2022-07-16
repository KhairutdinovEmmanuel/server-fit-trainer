import {Request, Response} from "express";
import {UserProfileType} from "../services/users";
import {BodyError, ValidatorBodyError} from "./CommonTypes";

export interface ProfileBodyI {
	userId: string;
}

export type RequestProfile = Request<{}, ProfileBodyI, ProfileBodyI, {}, {}>;

export type ResponseProfile = Response<UserProfileType | BodyError | ValidatorBodyError>;
