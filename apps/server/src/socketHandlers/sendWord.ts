import rooms from "../const/rooms";
import { Room, SlashCommands } from "../sharedTypes";
import { Socket } from "socket.io";
import addWordValidation from "./validations/addWordValidation";
import refreshRoom from "./roomFunctions/refreshRoom";
import passTurn from "./roomFunctions/passTurn";

const sendWord = (socket: Socket, newWord: string) => {
  addWordValidation(socket, newWord);

  const { playerName, roomId } = socket.data;
  const room = rooms.get(roomId);

  const newRoom = { ...room };

  switch (newWord) {
    case SlashCommands.PARAGRAPH_BREAK:
      newRoom.story = [...newRoom.story, []];
      break;
    case SlashCommands.PASS_TURN:
      break;
    case SlashCommands.VOTE_TO_END:
      const newPlayers = [...room.players];
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
      }
      break;
    default:
      const newStory = [...room.story];
      newStory[newStory.length - 1].push({
        author: playerName,
        word: newWord.replace(/\s+/g, ""),
      });
      newRoom.story = newStory;
      break;
  }

  rooms.set(roomId, newRoom);

  passTurn(roomId);
  refreshRoom(roomId);
};

export default sendWord;
