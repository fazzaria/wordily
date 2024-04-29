import express from "express";
import http from "http";
import path from "path";
//import loadRoutes from "routes/api/loadRoutes";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "../../public")));
//loadRoutes(app);

export default server;
