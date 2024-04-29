import io from "../../const/io";
import rooms from "../../const/rooms";
import { ServerType, SocketType } from "../../server/types";
import { ServerToClientEventName } from "../../sharedTypes";

// pass a socket to broadcast from it to the others in the room
const refreshRoom = (roomId: string, socket?: SocketType) => {
  const room = rooms.get(roomId);
  if (socket) {
    socket.to(roomId).emit(ServerToClientEventName.ROOM_UPDATED, room);
  } else {
    (io as ServerType)
      .in(roomId)
      .emit(ServerToClientEventName.ROOM_UPDATED, room);
  }
};

export default refreshRoom;
