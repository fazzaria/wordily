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

  const newRoom: Room = { ...room };

  if (newWord === SlashCommands.PARAGRAPH_BREAK) {
    newRoom.story = [...newRoom.story, []];
  } else {
    const newStory = [...room.story];
    newStory[newStory.length - 1].push({
      author: playerName,
      word: newWord.replace(/\s+/g, ""),
    });
    newRoom.story = newStory;
  }

  rooms.set(roomId, newRoom);
  passTurn(roomId);
  refreshRoom(roomId);
};

export default sendWord;
