import rooms from "../../const/rooms";
import { Room } from "../../sharedTypes";
import randomIndex from "../../utils/randomIndex";

const passTurn = (roomId: string) => {
  const room = rooms.get(roomId);
  const newPlayers = [...room.players];

  let indexOfActivePlayer = newPlayers.findIndex((player) => player.turnActive);
  if (indexOfActivePlayer === -1) {
    indexOfActivePlayer = randomIndex(newPlayers);
  }
  newPlayers[indexOfActivePlayer].turnActive = false;
  (newPlayers[indexOfActivePlayer + 1] || newPlayers[0]).turnActive = true;

  const newRoom: Room = { ...room, players: newPlayers };
  rooms.set(roomId, newRoom);
};

export default passTurn;
