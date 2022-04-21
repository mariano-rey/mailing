import client from "./index.service";
import urls from "./urls";

export interface ISendMail {
  bcc: string;
  subject: string;
  text?: string;
  html?: string;
}

const sendMails = async (data: ISendMail): Promise<void> => {
  const res = await client.post(urls.SEND_MAIL, data);
  console.log(res);
};

export { sendMails };
