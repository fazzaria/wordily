import { SocketType } from "../../server/types";
import {
  INVALID_PLAYER_NAME,
  UNKNOWN_ERROR,
} from "../../socketHandlers/errorHandling/const";

const createRoomValidation = (socket: SocketType, playerName: string) => {
  if (!socket) {
    throw UNKNOWN_ERROR;
  }
  if (!playerName || typeof playerName !== "string") {
    throw INVALID_PLAYER_NAME;
  }
};

export default createRoomValidation;
