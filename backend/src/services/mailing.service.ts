import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import config from "../config/config";

type ITransport = SMTPTransport | SMTPTransport.Options | string;
export interface ISendMail {
  bcc: string;
  subject: string;
  text?: string;
  html?: string;
}

const gmail: ITransport = {
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: config.MAIL_USER,
    pass: config.PASSWORD,
  },
};

const sendEmails = async (data: ISendMail) => {
  const transporter = nodemailer.createTransport(gmail);

  const info = await transporter.sendMail({
    from: `El cartero Peronista <${config.MAIL_USER as string}>`,
    ...data,
  });

  console.log("Aceptados: %s", info.accepted.length);
  console.log("Rechazados: %s", info.rejected.length);
};

export default sendEmails;
