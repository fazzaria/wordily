import { useCallback, useContext } from "react";
import { Room } from "../sharedTypes";
import GameContext from "../context/GameContext";

const useRoomUpdated = () => {
  const { setRoom } = useContext(GameContext);
  return useCallback(
    (room: Room) => {
      setRoom({ ...room });
    },
    [setRoom]
  );
};

export default useRoomUpdated;
