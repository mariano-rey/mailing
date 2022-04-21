import { Request } from "express";
import { HttpException } from "../api/httpClient";
import sendEmails, { ISendMail } from "../services/mailing.service";

const sendMails = async (req: Request) => {
  const body = req.body as ISendMail;
  console.log(body);
  if (!body.subject) throw new HttpException("El asunto es obligatorio");
  else if (!body.bcc)
    throw new HttpException("Ingrese al menos un destinatario");

  await sendEmails(body);
  return "MAILS ENVIADOS CORRECTAMENTE";
};

export default { sendMails };
