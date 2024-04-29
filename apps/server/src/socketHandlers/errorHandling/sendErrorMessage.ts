import { SocketType } from "../../server/types";
import { ServerToClientEventName } from "../../sharedTypes";

const sendErrorMessage = (socket: SocketType, message: string) => {
  socket.emit(ServerToClientEventName.ERROR, message);
};

export default sendErrorMessage;
