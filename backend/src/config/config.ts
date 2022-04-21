import "dotenv/config";

type ENV_TYPE = "development" | "production" | "test";
const NODE_ENV = process.env.NODE_ENV as ENV_TYPE;

export default {
  VERSION: process.env.VERSION || "FALTA 'VERSION' en el .env",
  PORT: process.env.PORT || 5050,
  NODE_ENV: NODE_ENV,
  USUARIO: process.env.USUARIO,
  PASSWORD: process.env.PASSWORD,
  MAIL_USER: process.env.MAIL_USER,
  IS_DEV: NODE_ENV === "development",
};
