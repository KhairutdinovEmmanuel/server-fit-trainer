import {DynamicMessageCreator} from "express-validator/src/base";

// DYNAMIC MESSAGES
const MESSAGE_ERROR_EMAIL: DynamicMessageCreator = (value): string => {
	return `${value} is not email`;
}

const MESSAGE_ERROR_TYPE_STRING: DynamicMessageCreator = (value, meta): string => {
	return `${meta.path} is not string`;
}

const MESSAGE_ERROR_TYPE_NUMBER: DynamicMessageCreator = (value, meta): string => {
	return `${meta.path} is not number`;
}

// CONSTANT MESSAGES
const MESSAGE_ERROR_PASSWORD: string = 'Password must be at least 6 and no more than 12 characters long';
const MESSAGE_ERROR_CONFIRM_CODE: string = 'Confirm code must be at least 6 and no more than 6 characters long';

export default {
	MESSAGE_ERROR_EMAIL,
	MESSAGE_ERROR_TYPE_STRING,
	MESSAGE_ERROR_TYPE_NUMBER,
	MESSAGE_ERROR_PASSWORD,
	MESSAGE_ERROR_CONFIRM_CODE,
}