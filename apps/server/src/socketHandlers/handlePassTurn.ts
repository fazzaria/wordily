import { Socket } from "socket.io";
import addWordValidation from "./validations/addWordValidation";
import refreshRoom from "./roomFunctions/refreshRoom";
import passTurn from "./roomFunctions/passTurn";
import { passedTurnMessage } from "../const/messages";
import sendInfoMessage from "./roomFunctions/sendInfoMessage";
import passTurnValidation from "./validations/passTurnValidation";

const handlePassTurn = (socket: Socket, command: string) => {
  addWordValidation(socket, command);
  passTurnValidation(command);

  const { playerName, roomId } = socket.data;

  sendInfoMessage(roomId, passedTurnMessage(playerName));

  passTurn(roomId);
  refreshRoom(roomId);
};

export default handlePassTurn;
