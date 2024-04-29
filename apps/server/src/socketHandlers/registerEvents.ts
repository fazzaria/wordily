import { ClientToServerEventName } from "../sharedTypes";
import createRoom from "./createRoom";
import disconnect from "./disconnect";
import joinRoom from "./joinRoom";
import leaveRoom from "./leaveRoom";
import { ServerType, SocketType } from "../server/types";
import sendWord from "./sendWord";
import toggleReady from "./toggleReady";
import withErrorHandling from "./errorHandling/withErrorHandling";
import { DisconnectReason } from "socket.io";

const registerEvents = (io: ServerType) => {
  io.on("connect", (socket: SocketType) => {
    socket.on(ClientToServerEventName.CREATE_ROOM, (playerName: string) =>
      withErrorHandling(socket, () => createRoom(socket, playerName))
    );
    socket.on(
      ClientToServerEventName.DISCONNECT,
      (reason: DisconnectReason, description?: any) =>
        withErrorHandling(socket, () => disconnect(socket, reason, description))
    );
    socket.on(
      ClientToServerEventName.JOIN_ROOM,
      (playerName: string, roomCode: string) => {
        withErrorHandling(socket, () => joinRoom(socket, playerName, roomCode));
      }
    );
    socket.on(ClientToServerEventName.LEAVE_ROOM, () =>
      withErrorHandling(socket, () => leaveRoom(socket))
    );
    socket.on(ClientToServerEventName.SEND_WORD, (newWord: string) => {
      withErrorHandling(socket, () => sendWord(socket, newWord));
    });
    socket.on(ClientToServerEventName.TOGGLE_READY, () => {
      withErrorHandling(socket, () => toggleReady(socket));
    });
  });
};

export default registerEvents;
