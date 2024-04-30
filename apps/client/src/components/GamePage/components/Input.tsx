import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import useRequest from "../../../utils/useRequest";
import sendWord from "../../../socketEmitters/sendWord";
import GameContext from "../../../context/GameContext";

const Input = () => {
  const { loading, setSnackBar } = useContext(GameContext);
  const [newWord, setNewWord] = useState<string>("");
  const request = useRequest();

  const validateInput = () => {
    if (!newWord) {
      setSnackBar("Please enter your name.", "error");
      return false;
    }
    return true;
  };

  const handleSendWord = () => {
    if (validateInput()) {
      request(() => sendWord(newWord));
      setNewWord("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewWord(e.target.value.replace(/\s+/g, ""));
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
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={newWord}
    />
  );
};

export default Input;
