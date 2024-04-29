import { server } from "server";
import { ServerType } from "../server/types";
import { Server } from "socket.io";
import isProd from "../utils/isProd";
import devCorsPolicy from "./devCorsPolicy";

const io = new Server<ServerType>(server, {
  ...(isProd() ? {} : devCorsPolicy),
});


export default io;
