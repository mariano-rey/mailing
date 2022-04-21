import path from "path";
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config/config";
import routes from "./routes/index.routes";
import HttpClient from "./api/httpClient";
import { authorize } from "./api/auth";

const app = express();
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("tiny"));
app.use(compression());
app.use(express.json({ limit: "50mb" }));

app.use(authorize());
app.use(`/api/v${config.VERSION}`, routes());

app.use(express.static(path.join(__dirname, "../cliente")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "../cliente/index.html"));
});
app.use(HttpClient.exception);

app.listen(config.PORT, () => {
  console.log(`VERSION: ${config.VERSION}`);
  console.log(`Server listening on port ${config.PORT}`);
  console.log(`localhost:5050/api/v${config.VERSION}`);
});

export default app;
