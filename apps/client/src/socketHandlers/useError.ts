import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useError = () => {
  const { setSnackBar } = useContext(GameContext);
  return useCallback(
    (message: string) => {
      setSnackBar(message, "error");
    },
    [setSnackBar]
  );
};

export default useError;
