import rooms from "../const/rooms";
import { Room } from "../sharedTypes";
import { Socket } from "socket.io";
import addWordValidation from "./validations/addWordValidation";
import refreshRoom from "./roomFunctions/refreshRoom";
import passTurn from "./roomFunctions/passTurn";
import {
  STORY_ENDED,
  rescindVoteToEndMessage,
  votedToEndMessage,
} from "../const/messages";
import sendInfoMessage from "./roomFunctions/sendInfoMessage";
import voteToEndValidation from "./validations/voteToEndValidation";

const voteToEnd = (socket: Socket, command: string) => {
  addWordValidation(socket, command);
  voteToEndValidation(command);

  const { playerName, roomId } = socket.data;
  const room = rooms.get(roomId);

  const newRoom: Room = { ...room };
  let newPlayers = [...newRoom.players];
  const currentPlayer = newPlayers.find(
    (player) => player.playerName === socket.data.playerName
  );

  currentPlayer.votingToEnd = !currentPlayer.votingToEnd;

  let endingStory = true;
  newPlayers.forEach((player) => {
    if (!player.votingToEnd) {
      endingStory = false;
    }
  });

  if (endingStory) {
    newRoom.gameStarted = false;
    newPlayers = newPlayers.map((player) => ({
      ...player,
      votingToEnd: false,
    }));
    sendInfoMessage(roomId, STORY_ENDED);
  } else {
    if (currentPlayer.votingToEnd) {
      sendInfoMessage(roomId, votedToEndMessage(playerName));
    } else {
      sendInfoMessage(roomId, rescindVoteToEndMessage(playerName));
    }
  }

  newRoom.players = newPlayers;
  rooms.set(roomId, newRoom);
  passTurn(roomId);
  refreshRoom(roomId);
};

export default voteToEnd;
