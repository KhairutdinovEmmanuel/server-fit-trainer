import {Router} from "express";
// SERVICES
import {getProfileById} from "../services/users";
// MIDDLEWARES
import middlewareAuthorizationUser from "../middlewares/middlewareAuthorizationUser";
// ERRORS
import UsersErrors from "../errors/users";
// TYPES
import {UserProfileType} from "../types/UsersService";
import {RequestProfile, ResponseProfile} from "../types/UsersController";

const router = Router()

router.get(
	'/profile',
	middlewareAuthorizationUser,
	async (req: RequestProfile, res: ResponseProfile) => {
		try {
			const user: UserProfileType | null = await getProfileById(req.body.userId);
			if (!user) {
				return res.status(404).json({ message: UsersErrors.USER_IS_NOT_FOUND });
			}
			return res.status(200).json({ ...user });
		} catch (error) {
			return res.status(500).json({ message: `Server Error: ${(error as Error).message}` })
		}
	}
);

export default router;
