import rooms from "../../const/rooms";
import { Room } from "../../sharedTypes";
import deleteRoom from "./deleteRoom";
import { SocketType } from "../../server/types";
import { UNKNOWN_ERROR } from "../../socketHandlers/errorHandling/const";
import socketIdToPlayerName from "../../const/socketIdToPlayerName";
import passTurn from "./passTurn";

const removePlayer = (socket: SocketType, roomId: string) => {
  const room = rooms.get(roomId);
  if (!room) {
    throw UNKNOWN_ERROR;
  }
  const playerName = socketIdToPlayerName.get(socket.id);
  console.log(playerName);
  const { players } = room;
  const newPlayers = players.filter(
    (player) => player.playerName !== playerName
  );
  socketIdToPlayerName.delete(socket.id);
  if (!newPlayers.length) {
    deleteRoom(roomId, room.code);
  } else {
    const newRoom: Room = {
      ...room,
      players: [...newPlayers],
    };
    if (room.gameStarted) {
      passTurn(roomId);
    }
    rooms.set(roomId, newRoom);
  }
  socket.leave(socket.data.roomId);
};

export default removePlayer;
