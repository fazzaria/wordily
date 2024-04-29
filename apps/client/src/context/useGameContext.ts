import { useEffect, useMemo, useState } from "react";
import { GameContextType } from "./types";
import { Room } from "../sharedTypes";
import { useNavigate } from "react-router-dom";
import { getRoomPath } from "../components/AppRoutes/paths/roomPath";
import homePath from "../components/AppRoutes/paths/homePath";

const useGameContext = (): GameContextType => {
  const [currentPlayerName, setCurrentPlayerName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (room?.code) {
      navigate(getRoomPath(room.code));
    } else {
      navigate(homePath);
    }
  }, [room?.code, navigate]);

  return useMemo(
    () => ({
      currentPlayerName,
      loading,
      room,
      setCurrentPlayerName,
      setLoading,
      setRoom,
      setSnackBarMessage,
      snackBarMessage,
    }),
    [currentPlayerName, loading, room, snackBarMessage]
  );
};

export default useGameContext;
