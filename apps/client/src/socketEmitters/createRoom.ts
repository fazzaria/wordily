import socket from "../const/socket";
import { ClientToServerEventName } from "../sharedTypes";

const createRoom = (playerName: string) => {
  socket.emit(ClientToServerEventName.CREATE_ROOM, playerName);
};

export default createRoom;
