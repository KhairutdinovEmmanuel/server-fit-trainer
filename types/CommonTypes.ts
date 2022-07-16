import {ValidationError} from "express-validator/src/base";

export interface BodyError {
	message: string;
}

export interface ValidatorBodyError {
	errors: Omit<ValidationError, "nestedErrors">
}