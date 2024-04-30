import { useEffect, useMemo, useState } from "react";
import { GameContextType } from "./types";
import { Room } from "../sharedTypes";
import { useNavigate } from "react-router-dom";
import { getRoomPath } from "../components/AppRoutes/paths/roomPath";
import homePath from "../components/AppRoutes/paths/homePath";
import { AlertColor } from "@mui/material";

const useGameContext = (): GameContextType => {
  const [currentPlayerName, setCurrentPlayerName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const [snackBarSeverity, setSnackBarSeverity] = useState<AlertColor>("info");
  const navigate = useNavigate();

  useEffect(() => {
    if (room?.code) {
      navigate(getRoomPath(room.code));
    } else {
      navigate(homePath);
    }
  }, [room?.code, navigate]);

  return useMemo(() => {
    const setSnackBar = (message: string, severity: AlertColor) => {
      setSnackBarSeverity(severity);
      setSnackBarMessage(message);
    };
    return {
      currentPlayerName,
      loading,
      room,
      setCurrentPlayerName,
      setLoading,
      setRoom,
      setSnackBar,
      snackBarMessage,
      snackBarSeverity,
    };
  }, [currentPlayerName, loading, room, snackBarMessage, snackBarSeverity]);
};

export default useGameContext;
