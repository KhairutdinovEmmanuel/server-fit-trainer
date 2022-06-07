import {body} from "express-validator";
import errorMessages from "./errorMessages";
import customValidations from "./customValidations";
import {combineValidation} from "../utils/validationHelper";
import {RequestVerify, ResponseVerify} from "../types/ControllerMessages";

export const validationControllerMessages = combineValidation<RequestVerify, ResponseVerify>([
	body("type")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
		.custom(customValidations.isTypeTemplate)
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_TEMPLATE),
	body("email")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
		.isEmail()
		.withMessage(errorMessages.MESSAGE_ERROR_EMAIL),
	body("link")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
]);
