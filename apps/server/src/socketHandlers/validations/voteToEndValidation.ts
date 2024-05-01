import { UNKNOWN_ERROR } from "../../const/messages";
import { SlashCommands } from "../../sharedTypes";

const voteToEndValidation = (command: string) => {
  if (command !== SlashCommands.VOTE_TO_END) {
    throw UNKNOWN_ERROR;
  }
};

export default voteToEndValidation;
