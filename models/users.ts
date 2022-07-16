import {Schema, model} from "mongoose";
import {UserI} from "../types/UsersModel";

const schemaUser = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	_additionalData: {
		confirmation_code: String,
		confirmed_email: Boolean,
		confirmed_change_password: Boolean,
	}
});

export default model<UserI>("User", schemaUser);
