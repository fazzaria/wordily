import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";
import { Room } from "../sharedTypes";

const useRoomCreated = () => {
  const { setRoom } = useContext(GameContext);
  return useCallback(
    (room: Room) => {
      if (room) {
        setRoom({ ...room });
      }
    },
    [setRoom]
  );
};

export default useRoomCreated;
