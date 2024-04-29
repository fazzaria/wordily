import { SocketType } from "../../server/types";

const initializeSocket = (
  socket: SocketType,
  roomId: string,
  playerName: string
) => {
  socket.data = {
    playerName,
    ready: false,
    roomId,
    turnActive: false,
    votingToEnd: false,
  };
};

export default initializeSocket;
