import { DisconnectReason } from "socket.io";
import removePlayer from "./roomFunctions/removePlayer";
import { SocketType } from "../server/types";
import refreshRoom from "./roomFunctions/refreshRoom";

const disconnect = (
  socket: SocketType,
  reason: DisconnectReason,
  description?: any
) => {
  const { roomId } = socket.data;
  removePlayer(socket, roomId);
  refreshRoom(roomId);
};

export default disconnect;
