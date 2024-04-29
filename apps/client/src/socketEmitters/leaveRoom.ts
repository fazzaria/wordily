import socket from "../const/socket";
import { ClientToServerEventName } from "../sharedTypes";

const leaveRoom = () => {
  socket.emit(ClientToServerEventName.LEAVE_ROOM);
};

export default leaveRoom;
