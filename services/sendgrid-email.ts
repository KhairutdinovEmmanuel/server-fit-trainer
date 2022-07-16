import sgMail from "@sendgrid/mail";
import {MailDataRequired} from "@sendgrid/helpers/classes/mail";

export default class SendgridEmail {
	data: MailDataRequired | MailDataRequired[];
	
	constructor(api_key: string, data: MailDataRequired | MailDataRequired[]) {
		sgMail.setApiKey(api_key);
		this.data = data;
	}
	
	async request() {
		const data = this.data;
		return await sgMail.send(data);
	}
}
