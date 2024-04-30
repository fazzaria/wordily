import { Typography, Grow, Paper, Tooltip, Collapse } from "@mui/material";
import { useContext, useMemo } from "react";
import GameContext from "../../../context/GameContext";

const Story = () => {
  const { room } = useContext(GameContext);

  const authorColorMap = useMemo(() => {
    const map = new Map<string, string>();
    room?.players.forEach(({ playerName, textColor }) => {
      map.set(playerName, textColor);
    });
    return map;
  }, [room?.players]);

  return (
    <Collapse in={!!room?.story[0]?.length}>
      <Paper sx={{ padding: 2, marginTop: 5, height: 200 }}>
        {room?.story.map((paragraph, paragraphNumber) => (
          <Typography key={`paragraph-${paragraphNumber}`}>
            {paragraph.map(({ author, word }, wordNumber) => {
              return (
                <Grow in key={`word-${wordNumber}`}>
                  <Tooltip title={`Added by ${author}`}>
                    <span
                      style={{
                        borderBottom: `5px solid ${authorColorMap.get(author)}`,
                      }}
                    >{`${word} `}</span>
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
