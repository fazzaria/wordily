import { GameContextType } from "./types";

const defaultGameContextValue: GameContextType = {
  currentPlayerName: "",
  loading: false,
  room: null,
  setCurrentPlayerName: () => null,
  setLoading: () => null,
  setRoom: () => null,
  setSnackBarMessage: () => null,
  snackBarMessage: "",
};

export default defaultGameContextValue;
