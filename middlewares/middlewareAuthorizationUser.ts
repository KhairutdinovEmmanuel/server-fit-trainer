import jwt from "jsonwebtoken";
// ERRORS
import ServerErrors from "../errors/server";
import UsersErrors from "../errors/users";
// TYPES
import {NextFunction, Request, Response} from "express";
import {PayloadTokenType} from "../types/AuthService";

// ENVIRONMENT VARIABLES
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;

// MIDDLEWARE
const middlewareAuthorizationUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const access_token: string | undefined = req.cookies?.access_token;
        if (!SECRET_TOKEN_KEY) {
            return res.status(501).json({ message: ServerErrors.SERVER_IS_NOT_IMPLEMENTED });
        }
        if (!access_token) {
            return res.status(401).json({ messages: UsersErrors.USER_UNAUTHORIZED });
        }
        const decodedToken = jwt.verify(access_token, SECRET_TOKEN_KEY);
        if (!decodedToken) {
            return res.status(401).json({ message: UsersErrors.USER_UNAUTHORIZED });
        }
        req.body.userId = (decodedToken as PayloadTokenType).userId;
        next()
    } catch (error) {
        return res.status(500).json({ message: `Server Error: ${(error as Error).message}` })
    }
}

export default middlewareAuthorizationUser;
