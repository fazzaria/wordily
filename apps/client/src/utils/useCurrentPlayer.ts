import { useContext, useMemo } from "react";
import GameContext from "../context/GameContext";

const useCurrentPlayer = () => {
  const { currentPlayerName, room } = useContext(GameContext);
  const currentPlayer = room?.players.find(
    ({ playerName }) => playerName === currentPlayerName
  );
  return useMemo(() => currentPlayer, [currentPlayer]);
};

export default useCurrentPlayer;
