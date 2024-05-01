import rooms from "../const/rooms";
import { SocketType } from "../server/types";
import { Room } from "../sharedTypes";
import toggleReadyValidation from "./validations/toggleReadyValidation";
import startGame from "./roomFunctions/startGame";
import refreshRoom from "./roomFunctions/refreshRoom";
import { GAME_STARTED, UNKNOWN_ERROR } from "../const/messages";
import sendInfoMessage from "./roomFunctions/sendInfoMessage";

const toggleReady = (socket: SocketType) => {
  toggleReadyValidation(socket);
  const { playerName, roomId } = socket.data;
  const room = rooms.get(roomId);
  const newPlayers = [...room.players];
  const currentPlayer = newPlayers.find(
    (player) => player.playerName === playerName
  );

  if (!currentPlayer) {
    throw UNKNOWN_ERROR;
  }

  const newReadyState = !currentPlayer.ready;
  currentPlayer.ready = newReadyState;
  socket.data.ready = newReadyState;

  let newRoom: Room = { ...room, players: newPlayers };
  rooms.set(roomId, newRoom);

  // if all players are now ready, start game
  let shouldStartGame = true;
  newPlayers.forEach((player) => {
    if (!player.ready) {
      shouldStartGame = false;
    }
  });
  if (shouldStartGame) {
    startGame(roomId);
    sendInfoMessage(roomId, GAME_STARTED);
  }
  refreshRoom(roomId);
};

export default toggleReady;
