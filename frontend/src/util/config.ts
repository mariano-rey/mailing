const { VITE_BASE_URL, VITE_NODE_ENV, VITE_JWT, VITE_USUARIO, VITE_PASSWORD } =
  import.meta.env;

type IEnv = "development" | "test" | "production";

const NODE_ENV = VITE_NODE_ENV as IEnv;
const config = {
  NAME: "MAILING",
  BASE_URL: VITE_BASE_URL as string,
  IS_DEV: NODE_ENV === "development",
  NODE_ENV,
  JWT: VITE_JWT as string,
  USUARIO: VITE_USUARIO as string,
  PASSWORD: VITE_PASSWORD as string,
};

export default config;
