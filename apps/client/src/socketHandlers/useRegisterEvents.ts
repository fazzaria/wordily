import { ServerToClientEventName } from "../sharedTypes";
import socket from "../const/socket";
import { useEffect } from "react";
import useRoomCreated from "./useRoomCreated";
import useRoomJoined from "./useRoomJoined";
import useRoomLeft from "./useRoomLeft";
import useRoomUpdated from "./useRoomUpdated";
import useError from "./useError";
import useVotedToEnd from "./useVotedToEnd";

const useRegisterEvents = () => {
  const errorFn = useError();
  const roomCreated = useRoomCreated();
  const roomJoined = useRoomJoined();
  const roomLeft = useRoomLeft();
  const roomUpdated = useRoomUpdated();
  const votedToEnd = useVotedToEnd();

  useEffect(() => {
    socket.on(ServerToClientEventName.ERROR, errorFn);
    return () => {
      socket.off(ServerToClientEventName.ERROR, errorFn);
    };
  }, [errorFn]);

  useEffect(() => {
    socket.on(ServerToClientEventName.ROOM_CREATED, roomCreated);
    return () => {
      socket.off(ServerToClientEventName.ROOM_CREATED, roomCreated);
    };
  }, [roomCreated]);

  useEffect(() => {
    socket.on(ServerToClientEventName.ROOM_JOINED, roomJoined);
    return () => {
      socket.off(ServerToClientEventName.ROOM_JOINED, roomJoined);
    };
  }, [roomJoined]);

  useEffect(() => {
    socket.on(ServerToClientEventName.ROOM_LEFT, roomLeft);
    return () => {
      socket.off(ServerToClientEventName.ROOM_LEFT, roomLeft);
    };
  }, [roomLeft]);

  useEffect(() => {
    socket.on(ServerToClientEventName.ROOM_UPDATED, roomUpdated);
    return () => {
      socket.off(ServerToClientEventName.ROOM_UPDATED, roomUpdated);
    };
  }, [roomUpdated]);

  useEffect(() => {
    socket.on(ServerToClientEventName.VOTED_TO_END, votedToEnd);
    return () => {
      socket.off(ServerToClientEventName.VOTED_TO_END, votedToEnd);
    };
  }, [votedToEnd]);
};

export default useRegisterEvents;
