import { validationResult } from "express-validator";
import {Request, Response, RequestHandler} from "express";

export const combineValidation = <Req extends Request, Res extends Response>(validations: any[]): RequestHandler[] => {
	return [
		...validations,
		(req: Req, res: Res, next) => {
			const result = validationResult(req);
			if (!result.isEmpty()) {
				return res.json({ errors: result.array() });
			}
			next();
		}
	]
}