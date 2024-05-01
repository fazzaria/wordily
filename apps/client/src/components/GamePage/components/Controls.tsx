import { useContext } from "react";
import GameContext from "../../../context/GameContext";
import ReadyButton from "../../ReadyButton/ReadyButton";
import Input from "./Input";
import useCurrentPlayer from "../../../utils/useCurrentPlayer";

const Controls = () => {
  const { room } = useContext(GameContext);
  const currentPlayer = useCurrentPlayer();

  const playerTurn = currentPlayer?.turnActive;
  const ready = currentPlayer?.ready;
  const gameStarted = room?.gameStarted;

  if (!gameStarted) {
    return <ReadyButton ready={!!ready} />;
  }
  return playerTurn ? <Input /> : null;
};

export default Controls;
