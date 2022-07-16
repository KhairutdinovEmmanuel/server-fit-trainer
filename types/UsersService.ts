import {UserI} from "./UsersModel";

export type UserProfileType = Pick<UserI, "email" | "firstName" | "lastName" | "fullName" | "avatar">;
