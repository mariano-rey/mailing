import { NextFunction, Request, Response } from "express";

export type FxProps = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

export class HttpException {
  _message: string;
  _status: number;
  constructor(message: string, status = 400) {
    this._message = message;
    this._status = status;
  }
}

const execute =
  (fx: FxProps) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await fx(req, res, next);
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ success: true, data });
    } catch (error) {
      next(error);
    }
  };

const exception = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) next();

  console.error("\x1b[31m%s\x1b[0m", JSON.stringify(err));
  if (err instanceof HttpException) {
    return res
      .status(err._status)
      .json({ success: false, message: err._message });
  }

  res.status(404).json({ success: false, message: "Not Found" });
};

export default { execute, exception };
