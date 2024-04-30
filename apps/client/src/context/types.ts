import { Dispatch, SetStateAction } from "react";
import { Room } from "../sharedTypes";
import { AlertColor } from "@mui/material";

export interface GameContextType {
  currentPlayerName: string;
  loading: boolean;
  room: Room | null;
  setCurrentPlayerName: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setRoom: Dispatch<SetStateAction<Room | null>>;
  setSnackBar: (message: string, severity: AlertColor) => void;
  snackBarMessage: string;
  snackBarSeverity: AlertColor;
}
