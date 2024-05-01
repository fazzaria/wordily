import { UNKNOWN_ERROR } from "../../const/messages";
import { SlashCommands } from "../../sharedTypes";

const passTurnValidation = (command: string) => {
  if (command !== SlashCommands.PASS_TURN) {
    throw UNKNOWN_ERROR;
  }
};

export default passTurnValidation;
