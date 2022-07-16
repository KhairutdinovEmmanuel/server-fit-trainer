import {body} from "express-validator";
import {combineValidation} from "../utils/validationHelper";
import {
	RequestAuth, ResponseAuth,
	RequestVerify, ResponseVerify,
	RequestForgot, ResponseForgot
} from "../types/AuthController";
import errorMessages from "./errorMessages";
import customValidations from "./customValidations";

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

export const validationVerify = combineValidation<RequestVerify, ResponseVerify>([
	body("email")
		.isString()
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_STRING)
		.isEmail()
		.withMessage(errorMessages.MESSAGE_ERROR_EMAIL),
	body("confirmCode")
		.custom(customValidations.isNumber)
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_NUMBER)
		.isLength({ min: 6, max: 6 })
		.withMessage(errorMessages.MESSAGE_ERROR_CONFIRM_CODE),
])

export const validationForgot = combineValidation<RequestForgot, ResponseForgot>([
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
	body("confirmCode")
		.custom(customValidations.isNumber)
		.withMessage(errorMessages.MESSAGE_ERROR_TYPE_NUMBER)
		.isLength({ min: 6, max: 6 })
		.withMessage(errorMessages.MESSAGE_ERROR_CONFIRM_CODE),
])
