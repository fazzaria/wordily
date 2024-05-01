import { Typography } from "@mui/material";
import { SlashCommands } from "../../../sharedTypes";
import useCurrentPlayer from "../../../utils/useCurrentPlayer";

const Instructions = () => {
  const currentPlayer = useCurrentPlayer();

  const votedToEnd = currentPlayer?.votingToEnd;

  const commands: { command: SlashCommands; description: string }[] = [
    { command: SlashCommands.PARAGRAPH_BREAK, description: "New Paragraph" },
    { command: SlashCommands.PASS_TURN, description: "Pass Turn" },
    {
      command: SlashCommands.VOTE_TO_END,
      description: votedToEnd ? "Vote to Continue Story" : "Vote to End Story",
    },
  ];

  return (
    <>
      <Typography sx={{ marginBottom: 2 }}>
        <span style={{ fontWeight: "bold" }}>How to Play:</span> On your turn,
        add a word and/or punctuation to the ongoing story. You may also enter
        one of the commands below.
      </Typography>
      {commands.map(({ command, description }) => (
        <Typography key={`command-li-${command}`}>
          <span style={{ fontWeight: "bold" }}>{command} </span>
          {` ${description}`}
        </Typography>
      ))}
    </>
  );
};

export default Instructions;
