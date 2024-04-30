import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useVotedToEnd = () => {
  const { setSnackBar } = useContext(GameContext);
  return useCallback(
    (playerName: string) => {
      if (playerName) {
        setSnackBar(`${playerName} has voted to end the story here.`, "info");
      }
    },
    [setSnackBar]
  );
};

export default useVotedToEnd;
