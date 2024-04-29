import { useCallback, useContext } from "react";
import GameContext from "../context/GameContext";
import { Room } from "../sharedTypes";

const useRoomJoined = () => {
  const { setRoom } = useContext(GameContext);
  return useCallback(
    (room: Room) => {
      setRoom(room);
    },
    [setRoom]
  );
};

export default useRoomJoined;
