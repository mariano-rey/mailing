import express from "express";
import base from "../api/httpClient";
import mailingController from "../controllers/mailing.controller";

const routes = () => {
  const router = express.Router();
  router.post("/send", base.execute(mailingController.sendMails));
  return router;
};

export default routes;
