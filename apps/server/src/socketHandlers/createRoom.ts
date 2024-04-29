import rooms from "../const/rooms";
import alphabet from "../const/alphabet";
import { ServerToClientEventName } from "../sharedTypes";
import possibleRoomCodes from "../const/possibleRoomCodes";
import { SocketType } from "../server/types";
import { nanoid } from "nanoid";
import addPlayer from "./roomFunctions/addPlayer";
import addRoom from "./roomFunctions/addRoom";
import createRoomValidation from "./validations/createRoomValidation";
import { ROOM_CREATE_ERROR } from "./errorHandling/const";
import initializeSocket from "./roomFunctions/initializeSocket";

const createRoom = (socket: SocketType, playerName: string) => {
  createRoomValidation(socket, playerName);
  let roomCode = "";
  let tries = 0;
  while (!roomCode && tries < possibleRoomCodes) {
    let tryCode = "";
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * alphabet.length);
      tryCode += alphabet[index];
    }
    if (!rooms.get(tryCode)) {
      roomCode = tryCode;
      tries++;
    }
  }
  if (roomCode) {
    const roomId = nanoid();
    addRoom(roomId, roomCode);
    addPlayer(socket, roomId, playerName);
    initializeSocket(socket, roomId, playerName);
    socket.emit(ServerToClientEventName.ROOM_CREATED, rooms.get(roomId));
  } else {
    throw ROOM_CREATE_ERROR;
  }
};

export default createRoom;
