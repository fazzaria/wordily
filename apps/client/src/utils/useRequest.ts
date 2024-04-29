import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useRequest = () => {
  const { setLoading, setSnackBarMessage } = useContext(GameContext);
  return useCallback(
    (fn: Function) => {
      setLoading(true);
      try {
        fn();
      } catch (error: any) {
        setSnackBarMessage(error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSnackBarMessage]
  );
};

export default useRequest;
