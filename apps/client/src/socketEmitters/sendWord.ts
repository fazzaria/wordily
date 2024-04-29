import socket from "../const/socket";
import { ClientToServerEventName } from "../sharedTypes";

const sendWord = (newWord: string) => {
  socket.emit(ClientToServerEventName.SEND_WORD, newWord);
};

export default sendWord;
