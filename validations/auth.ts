import {body} from "express-validator";
import {combineValidation} from "../utils/validationHelper";
import {RequestAuth, ResponseAuth} from "../types/ControllerAuth";
import errorMessages from "./index";

export const validationAuth = combineValidation<RequestAuth, ResponseAuth>([
	body("email")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
		.isEmail()
		.withMessage(errorMessages.MESSAGE_ERROR_EMAIL),
	body("password")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
		.isLength({ min: 6, max: 12 })
		.withMessage(errorMessages.MESSAGE_ERROR_PASSWORD),
]);
