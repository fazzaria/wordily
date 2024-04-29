import { Grow, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import GameContext from "../../../context/GameContext";
import PlayerIcon from "./PlayerIcon";

const PlayerList = () => {
  const { room } = useContext(GameContext);

  return (
    <>
      {room?.players.map((player) => {
        const { playerName } = player;
        return (
          <Grow in key={`player-${playerName}`}>
            <Stack direction="row" sx={{ float: "left", marginRight: 1 }}>
              <PlayerIcon player={player} />
              <Typography>{playerName}</Typography>
            </Stack>
          </Grow>
        );
      })}
    </>
  );
};

export default PlayerList;
