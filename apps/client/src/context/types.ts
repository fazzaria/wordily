import { Dispatch, SetStateAction } from "react";
import { Room } from "../sharedTypes";

export interface GameContextType {
  currentPlayerName: string;
  loading: boolean;
  room: Room | null;
  setCurrentPlayerName: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setRoom: Dispatch<SetStateAction<Room | null>>;
  setSnackBarMessage: Dispatch<SetStateAction<string>>;
  snackBarMessage: string;
}
