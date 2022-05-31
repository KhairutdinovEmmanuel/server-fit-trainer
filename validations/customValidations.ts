import {CustomValidator} from "express-validator/src/base";

// CUSTOM VALIDATION
const isNumber: CustomValidator = (input) => {
	return typeof input === 'number';
}

const isTypeTemplate: CustomValidator = (input) => {
	return ["VFT", "RFT"].includes(input);
}


export default {
	isNumber,
	isTypeTemplate,
};
