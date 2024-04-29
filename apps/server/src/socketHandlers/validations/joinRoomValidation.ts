import roomCodeToRoomId from "../../const/roomCodeToRoomId";
import rooms from "../../const/rooms";
import { SocketType } from "../../server/types";
import {
  INVALID_PLAYER_NAME,
  INVALID_ROOM_CODE,
  NON_UNIQUE_PLAYER_NAME,
  ROOM_NOT_FOUND,
  UNKNOWN_ERROR,
} from "../../socketHandlers/errorHandling/const";

// return error message if invalid, or an empty string if valid
const joinRoomValidation = (
  socket: SocketType,
  playerName: string,
  roomCode: string
) => {
  // validate socket
  if (!socket) {
    throw UNKNOWN_ERROR;
  }
  let errorMessages: string[] = [];
  // validate input
  if (!playerName || typeof playerName !== "string") {
    errorMessages.push(INVALID_PLAYER_NAME);
  }
  let roomId = "";
  if (!roomCode || typeof roomCode !== "string") {
    errorMessages.push(INVALID_ROOM_CODE);
  }
  if (errorMessages.length) {
    throw `${errorMessages.join(" | ")}.`;
  }
  // check that room exists
  roomId = roomCodeToRoomId.get(roomCode);
  if (!roomId) {
    throw ROOM_NOT_FOUND;
  }
  const room = rooms.get(roomId);
  if (!room) {
    throw UNKNOWN_ERROR;
  }
  // check for unique player name
  if (room.players.find((player) => player.playerName === playerName)) {
    throw NON_UNIQUE_PLAYER_NAME;
  }
};

export default joinRoomValidation;
