import { Response, Request, NextFunction } from "express";
import config from "../config/config";
import { HttpException } from "./httpClient";

const authorize = () => (req: Request, res: Response, next: NextFunction) => {
  const { user, password } = req.query;
  const { PASSWORD, USUARIO } = config;

  if (user !== USUARIO || password !== PASSWORD) {
    const error = new HttpException("Acceso denegado", 401);
    return next(error);
  }

  return next();
};

export { authorize };
