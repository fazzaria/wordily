import { FC } from "react";
import useRegisterEvents from "./useRegisterEvents";

const SocketInit: FC = () => {
  useRegisterEvents();
  return null;
};

export default SocketInit;
