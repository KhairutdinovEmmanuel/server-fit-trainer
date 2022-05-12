import {CustomValidator} from "express-validator/src/base";

// CUSTOM VALIDATION
const isNumber: CustomValidator = (input) => {
	return typeof input === 'number';
}

export default {
	isNumber,
};
