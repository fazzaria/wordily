import { GameContextType } from "./types";

const defaultGameContextValue: GameContextType = {
  currentPlayerName: "",
  loading: false,
  room: null,
  setCurrentPlayerName: () => null,
  setLoading: () => null,
  setRoom: () => null,
  setSnackBar: () => null,
  snackBarMessage: "",
  snackBarSeverity: "info",
};

export default defaultGameContextValue;
