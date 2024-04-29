import {
  ClientToServerEvents,
  ServerToClientEvents,
  SocketData,
} from "../sharedTypes";
import { Server, Socket } from "socket.io";

export interface InterServerEvents {
  ping: () => void;
}

export type ServerType = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export type SocketType = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  any,
  SocketData
>;
