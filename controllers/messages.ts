import {Router} from "express";
import SendgridEmail from "../services/sendgrid-email";
import {validationControllerMessages} from "../validations/messages";
import {
	SENDGRID_VERIFY_DESCRIPTION,
	SENDGRID_FORGOT_DESCRIPTION,
} from "../constants/sendgrid";
import {
	RequestVerify, ResponseVerify,
	RequestForgot, ResponseForgot,
} from "../types/ControllerMessages";
import {MailDataRequired} from "@sendgrid/helpers/classes/mail";

const router = Router();

router.post(
	'/verify',
	validationControllerMessages,
	async (req: RequestVerify, res: ResponseVerify) => {
		try {
			const { type, link, email } = req.body;
			// generate confirmCode ...
			const confirmCode = 123456;
			// set user confirmCode ...
			// send message on email ...
			const api_key = process.env.SENDGRID_API_KEY;
			const templateId = process.env[`SENDGRID_${type}_TEMPLATE_ID`] || "";
			const fromEmail = process.env.SENDGRID_DATA_FROM || "";
			if (!api_key || !templateId || !fromEmail) {
				return res.status(500).json({ message: 'Server Error' });
			}
			const payload: MailDataRequired = {
				to: {
					email
				},
				from: {
					email: fromEmail,
				},
				templateId,
				dynamicTemplateData: {
					description: SENDGRID_VERIFY_DESCRIPTION,
					confirmCode,
					link,
				}
			}
			const sg = new SendgridEmail(api_key, payload);
			await sg.request();
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
);

router.post(
	'/forgot',
	validationControllerMessages,
	async (req: RequestForgot, res: ResponseForgot) => {
		try {
			const { type, link, email } = req.body;
			// generate confirmCode ...
			const confirmCode = 123456;
			// set user confirmCode ...
			// send message on email ...
			const api_key = process.env.SENDGRID_API_KEY;
			const templateId = process.env[`SENDGRID_${type}_TEMPLATE_ID`] || "";
			const fromEmail = process.env.SENDGRID_DATA_FROM || "";
			if (!api_key || !templateId || !fromEmail) {
				return res.status(500).json({ message: 'Server Error' });
			}
			const payload: MailDataRequired = {
				to: {
					email
				},
				from: {
					email: fromEmail,
				},
				templateId,
				dynamicTemplateData: {
					description: SENDGRID_FORGOT_DESCRIPTION,
					confirmCode,
					link,
				}
			}
			const sg = new SendgridEmail(api_key, payload);
			await sg.request();
			return res.status(204).json({});
		} catch (error: any) {
			return res.status(500).json({ message: `Server Error: ${error.message}` })
		}
	}
);

export default router;
