import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import useRequest from "../../../utils/useRequest";
import sendWord from "../../../socketEmitters/sendWord";
import GameContext from "../../../context/GameContext";

const validateInput = () => {
  return true;
};

const Input = () => {
  const { loading } = useContext(GameContext);
  const [newWord, setNewWord] = useState<string>("");
  const request = useRequest();

  const handleSendWord = () => {
    if (validateInput()) {
      request(() => sendWord(newWord));
      setNewWord("");
    }
  };

  // todo: validate input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };

  return (
    <TextField
      autoFocus
      disabled={loading}
      fullWidth
      helperText=""
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleSendWord}>
            <SendIcon />
          </IconButton>
        ),
      }}
      label="It's your turn!"
      onChange={(e) => setNewWord(e.target.value)}
      onKeyDown={handleKeyDown}
      value={newWord}
    />
  );
};

export default Input;
