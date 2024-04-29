import { Room } from "../../sharedTypes";
import { SocketType } from "../../server/types";
import rooms from "../../const/rooms";
import { UNKNOWN_ERROR } from "../errorHandling/const";
import socketIdToPlayerName from "../../const/socketIdToPlayerName";

const addPlayer = (socket: SocketType, roomId: string, playerName: string) => {
  const room = rooms.get(roomId);
  if (!room) {
    throw UNKNOWN_ERROR;
  }
  const { players } = room;
  const newRoom: Room = {
    ...room,
    players: [
      ...players,
      { playerName, ready: false, turnActive: false, votingToEnd: false },
    ],
  };
  socketIdToPlayerName.set(socket.id, playerName);
  rooms.set(roomId, newRoom);
  socket.join(roomId);
};

export default addPlayer;
