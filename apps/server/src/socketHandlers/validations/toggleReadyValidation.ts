import rooms from "../../const/rooms";
import { SocketType } from "../../server/types";
import { UNKNOWN_ERROR } from "../../const/messages";

const toggleReadyValidation = (socket: SocketType) => {
  if (!socket) {
    throw UNKNOWN_ERROR;
  }
  const room = rooms.get(socket.data.roomId);
  if (!room || room.gameStarted) {
    throw UNKNOWN_ERROR;
  }
};

export default toggleReadyValidation;
