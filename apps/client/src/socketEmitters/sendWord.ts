import socket from "../const/socket";
import { ClientToServerEventName, SlashCommands } from "../sharedTypes";

const sendWord = (newWord: string) => {
  switch (newWord) {
    case SlashCommands.PASS_TURN:
      socket.emit(ClientToServerEventName.PASS_TURN, newWord);
      break;
    case SlashCommands.VOTE_TO_END:
      socket.emit(ClientToServerEventName.VOTE_TO_END, newWord);
      break;
    default:
      socket.emit(ClientToServerEventName.SEND_WORD, newWord);
  }
};

export default sendWord;
