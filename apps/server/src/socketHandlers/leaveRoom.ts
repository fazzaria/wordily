import { ServerToClientEventName } from "../sharedTypes";
import { SocketType } from "../server/types";
import refreshRoom from "./roomFunctions/refreshRoom";
import removePlayer from "./roomFunctions/removePlayer";

const leaveRoom = (socket: SocketType) => {
  const { roomId } = socket.data;
  removePlayer(socket, roomId);
  socket.emit(ServerToClientEventName.ROOM_LEFT);
  refreshRoom(roomId);
};

export default leaveRoom;
