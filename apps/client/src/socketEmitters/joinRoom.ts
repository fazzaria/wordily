import socket from "../const/socket";
import { ClientToServerEventName } from "../sharedTypes";

const joinRoom = (playerName: string, roomCode: string) => {
  socket.emit(ClientToServerEventName.JOIN_ROOM, playerName, roomCode);
};

export default joinRoom;
