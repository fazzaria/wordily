import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useError = () => {
  const { setSnackBarMessage } = useContext(GameContext);
  return useCallback(
    (message: string) => {
      setSnackBarMessage(message);
    },
    [setSnackBarMessage]
  );
};

export default useError;
