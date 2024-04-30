import { useContext } from "react";
import GameContext from "../../../context/GameContext";
import ReadyButton from "../../ReadyButton/ReadyButton";
import Input from "./Input";

const Controls = () => {
  const { currentPlayerName, room } = useContext(GameContext);
  const player = room?.players.find(
    ({ playerName }) => playerName === currentPlayerName
  );
  const playerTurn = player?.turnActive;
  const ready = player?.ready;
  const gameStarted = room?.gameStarted;

  if (!gameStarted) {
    return <ReadyButton ready={!!ready} />;
  }
  return playerTurn ? <Input /> : null;
};

export default Controls;
