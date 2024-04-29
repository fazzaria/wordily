import socketIdToPlayerName from "../../const/socketIdToPlayerName";
import rooms from "../../const/rooms";
import { SocketType } from "../../server/types";
import {
  INVALID_WORD,
  UNKNOWN_ERROR,
} from "../../socketHandlers/errorHandling/const";

// todo: add punctuation validation
const addWordValidation = (socket: SocketType, newWord: string) => {
  if (!newWord || typeof newWord !== "string") {
    throw INVALID_WORD;
  }
  const room = rooms.get(socket.data.roomId);
  if (!room || !room.gameStarted) {
    throw UNKNOWN_ERROR;
  }
  const playerName = socketIdToPlayerName.get(socket.id);
  const currentPlayer = room.players.find(
    (player) => player.playerName === playerName
  );

  if (!currentPlayer || !currentPlayer.turnActive) {
    throw UNKNOWN_ERROR;
  }
};

export default addWordValidation;
