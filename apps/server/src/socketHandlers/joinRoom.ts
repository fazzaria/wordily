import roomCodeToRoomId from "../const/roomCodeToRoomId";
import rooms from "../const/rooms";
import { ServerToClientEventName } from "../sharedTypes";
import addPlayer from "./roomFunctions/addPlayer";
import { SocketType } from "../server/types";
import joinRoomValidation from "./validations/joinRoomValidation";
import refreshRoom from "./roomFunctions/refreshRoom";
import initializeSocket from "./roomFunctions/initializeSocket";

const joinRoom = (socket: SocketType, playerName: string, roomCode: string) => {
  joinRoomValidation(socket, playerName, roomCode);
  const roomId = roomCodeToRoomId.get(roomCode);
  addPlayer(socket, roomId, playerName);
  initializeSocket(socket, roomId, playerName);
  socket.emit(ServerToClientEventName.ROOM_JOINED, rooms.get(roomId));
  refreshRoom(roomId);
};

export default joinRoom;
