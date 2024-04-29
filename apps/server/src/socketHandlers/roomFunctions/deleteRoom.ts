import roomCodeToRoomId from "../../const/roomCodeToRoomId";
import rooms from "../../const/rooms";

const deleteRoom = (id: string, roomCode: string) => {
  rooms.delete(id);
  roomCodeToRoomId.delete(roomCode);
};

export default deleteRoom;
