import { Typography, Grow, Paper, Tooltip, Collapse } from "@mui/material";
import { useContext } from "react";
import GameContext from "../../../context/GameContext";

const Story = () => {
  const { room } = useContext(GameContext);

  return (
    <Collapse in={!!room?.story[0]?.length}>
      <Paper
        sx={{ padding: 2, marginTop: 5, height: 200, overflowY: "scroll" }}
      >
        {room?.story.map((paragraph, paragraphNumber) => (
          <Typography key={`paragraph-${paragraphNumber}`}>
            {paragraph.map(({ author, word }, wordNumber) => {
              return (
                <Grow in key={`word-${wordNumber}`}>
                  <Tooltip title={`Added by ${author}`}>
                    <span>{`${word} `}</span>
                  </Tooltip>
                </Grow>
              );
            })}
          </Typography>
        ))}
      </Paper>
    </Collapse>
  );
};

export default Story;
