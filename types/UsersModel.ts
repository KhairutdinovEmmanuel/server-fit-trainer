import {Document} from "mongoose";

export interface UserAdditionalData {
    confirmation_code: string | null,
    confirmed_email: boolean | null,
    confirmed_change_password: boolean | null,
}

export interface UserI {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    fullName: string;
    avatar?: string;
    _additionalData: UserAdditionalData;
}

export type DocumentUser = Document & UserI;
