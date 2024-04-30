import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useRequest = () => {
  const { setLoading, setSnackBar } = useContext(GameContext);
  return useCallback(
    (fn: Function) => {
      setLoading(true);
      try {
        fn();
      } catch (error: any) {
        setSnackBar(error, "error");
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSnackBar]
  );
};

export default useRequest;
