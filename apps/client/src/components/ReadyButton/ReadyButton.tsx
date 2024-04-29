import { Button } from "@mui/material";
import useRequest from "../../utils/useRequest";
import { ReadyButtonProps } from "./types";
import { FC, useContext } from "react";
import toggleReady from "../../socketEmitters/toggleReady";
import GameContext from "../../context/GameContext";

const ReadyButton: FC<ReadyButtonProps> = ({ ready }) => {
  const { loading } = useContext(GameContext);
  const request = useRequest();
  const handleToggleReady = () => {
    request(() => toggleReady());
  };

  return (
    <Button
      disabled={loading}
      fullWidth
      onClick={handleToggleReady}
      variant="contained"
    >
      {ready ? "Waiting for Players..." : "Ready"}
    </Button>
  );
};

export default ReadyButton;
