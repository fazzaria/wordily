import rooms from "../../const/rooms";
import { Room } from "../../sharedTypes";
import randomIndex from "../../utils/randomIndex";

const startGame = (roomId: string) => {
  const room = rooms.get(roomId);
  const newPlayers = room.players.map((player) => ({
    ...player,
    ready: false,
    turnActive: false,
    votingToEnd: false,
  }));
  const startingPlayerIndex = randomIndex(newPlayers);
  newPlayers[startingPlayerIndex].turnActive = true;
  const newRoom: Room = {
    ...room,
    gameStarted: true,
    players: newPlayers,
    story: [[]],
  };
  rooms.set(roomId, newRoom);
};

export default startGame;
