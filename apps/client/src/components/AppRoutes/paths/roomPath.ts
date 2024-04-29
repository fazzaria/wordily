const roomPath = "/room";

const getRoomPath = (roomCode: string) => {
  return `${roomPath}/${roomCode}`;
};

export { getRoomPath, roomPath };
