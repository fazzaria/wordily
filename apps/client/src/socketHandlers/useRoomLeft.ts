import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";

const useRoomLeft = () => {
  const { setRoom } = useContext(GameContext);
  return useCallback(() => {
    setRoom(null);
  }, [setRoom]);
};

export default useRoomLeft;
