import socket from "../const/socket";
import { ClientToServerEventName } from "../sharedTypes";

const toggleReady = () => {
  socket.emit(ClientToServerEventName.TOGGLE_READY);
};

export default toggleReady;
