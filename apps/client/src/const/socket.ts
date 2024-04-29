import { Socket, io } from "socket.io-client";
import SERVER_URL from "./serverUrl";
import { ClientToServerEvents, ServerToClientEvents } from "../sharedTypes";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(SERVER_URL);

export default socket;
