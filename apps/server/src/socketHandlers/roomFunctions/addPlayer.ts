import { Room, textColors } from "../../sharedTypes";
import { SocketType } from "../../server/types";
import rooms from "../../const/rooms";
import { UNKNOWN_ERROR } from "../errorHandling/const";
import socketIdToPlayerName from "../../const/socketIdToPlayerName";
import randomIndex from "../../utils/randomIndex";

const addPlayer = (socket: SocketType, roomId: string, playerName: string) => {
  const room = rooms.get(roomId);
  if (!room) {
    throw UNKNOWN_ERROR;
  }
  const { players } = room;
  let textColor = "";
  if (players.length - 1 > textColors.length) {
    textColor = textColors[randomIndex(textColors)];
  } else {
    const colorsInUse: string[] = players.map((player) => player.textColor);
    const availableColors = textColors.filter(
      (color) => !colorsInUse.includes(color)
    );
    textColor = availableColors[randomIndex(availableColors)];
  }
  const newRoom: Room = {
    ...room,
    players: [
      ...players,
      {
        playerName,
        ready: false,
        textColor,
        turnActive: false,
        votingToEnd: false,
      },
    ],
  };
  socketIdToPlayerName.set(socket.id, playerName);
  rooms.set(roomId, newRoom);
  socket.join(roomId);
};

export default addPlayer;
