import _ from "lodash";
// MODELS
import User from "../models/users";
// TYPES
import {UserProfileType} from "../types/UsersService";
import {UserI, DocumentUser} from "../types/UsersModel";

export const createUser = async (payload: Omit<UserI, "fullName" | "_additionalData">): Promise<DocumentUser> => {
	const fullName = `${payload.firstName} ${payload.lastName}`;
	const user = new User<UserI>({
		...payload,
		fullName,
		_additionalData: {
			confirmed_email: null,
			confirmation_code: null,
			confirmed_change_password: null,
		}
	});
	return await user.save();
}

export const getProfileById = async (userId: string): Promise<UserProfileType | null> => {
	const user = await User.findOne({ id: userId }).exec()
	if (!user) return user;
	return _.pick(
		user,
		["email", "firstName", "lastName", "fullName", "avatar"]
	);
}
