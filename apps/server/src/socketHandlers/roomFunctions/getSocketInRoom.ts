import io from "../../const/io";

const getSocketInRoom = async (roomId: string, playerName: string) => {
  const sockets = await io.in(roomId).fetchSockets();
  const socket = sockets.find;
};

export default getSocketInRoom;
