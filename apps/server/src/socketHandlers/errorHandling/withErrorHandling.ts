import { SocketType } from "../../server/types";
import sendErrorMessage from "./sendErrorMessage";
import { UNKNOWN_ERROR } from "./const";

const withErrorHandling = (socket: SocketType, fn: Function) => {
  try {
    fn();
  } catch (error) {
    let message = UNKNOWN_ERROR;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    sendErrorMessage(socket, message);
  }
};

export default withErrorHandling;
