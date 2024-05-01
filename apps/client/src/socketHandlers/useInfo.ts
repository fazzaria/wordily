import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useInfo = () => {
  const { setSnackBar } = useContext(GameContext);
  return useCallback(
    (message: string) => {
      setSnackBar(message, "info");
    },
    [setSnackBar]
  );
};

export default useInfo;
