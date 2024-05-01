import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import createRoom from "../../socketEmitters/createRoom";
import joinRoom from "../../socketEmitters/joinRoom";
import GameContext from "../../context/GameContext";
import useRequest from "../../utils/useRequest";

const HomePage = () => {
  const { loading, setCurrentPlayerName, setSnackBar } =
    useContext(GameContext);
  const request = useRequest();
  const [joinRoomCode, setJoinRoomCode] = useState("");
  const [playerName, setPlayerName] = useState("");

  const validateForm = () => {
    if (!playerName) {
      setSnackBar("Please enter your name.", "error");
      return false;
    }
    return true;
  };

  const handleCreateRoom = () => {
    if (validateForm()) {
      request(() => createRoom(playerName));
    }
  };

  const handleJoinGame = () => {
    if (!joinRoomCode) {
      setSnackBar("Please enter a room code to join.", "error");
    } else if (validateForm()) {
      request(() => joinRoom(playerName, joinRoomCode));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      if (joinRoomCode) {
        handleJoinGame();
      } else {
        handleCreateRoom();
      }
    }
  };

  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" paragraph variant="h4">
          wordily
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          autoFocus
          fullWidth
          onChange={(e) => {
            const name = e.target.value;
            setCurrentPlayerName(name);
            setPlayerName(name);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Your Name"
          value={playerName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          inputProps={{ maxLength: 4 }}
          onChange={(e) => {
            setJoinRoomCode(e.target.value.toUpperCase());
          }}
          onKeyDown={handleKeyDown}
          placeholder="Enter Room Code"
          value={joinRoomCode}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          disabled={loading}
          onClick={handleJoinGame}
          variant="contained"
        >
          Join Game
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="secondary"
          disabled={loading}
          fullWidth
          onClick={handleCreateRoom}
          variant="contained"
        >
          New Game
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;
