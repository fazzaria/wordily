import roomCodeToRoomId from "../../const/roomCodeToRoomId";
import rooms from "../../const/rooms";

const addRoom = (roomId: string, roomCode: string) => {
  rooms.set(roomId, {
    code: roomCode,
    gameStarted: false,
    players: [],
    story: [[]],
  });
  roomCodeToRoomId.set(roomCode, roomId);
};

export default addRoom;
