import rooms from "../../const/rooms";
import io from "../../const/io";
import { ServerType, SocketType } from "../../server/types";
import { ServerToClientEventName } from "../../sharedTypes";

const sendInfoMessage = (
  roomId: string,
  message: string,
  socket?: SocketType
) => {
  if (socket) {
    socket.emit(ServerToClientEventName.INFO, message);
  } else {
    (io as ServerType).in(roomId).emit(ServerToClientEventName.INFO, message);
  }
};

export default sendInfoMessage;
