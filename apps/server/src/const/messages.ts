export const GAME_STARTED = "The story has begun.";
export const INVALID_PLAYER_NAME = "Invalid player name.";
export const INVALID_ROOM_CODE = "Invalid room code.";
export const INVALID_WORD = "Invalid word.";
export const NON_UNIQUE_PLAYER_NAME =
  "A player with that name is already in the room.";
export const ROOM_CREATE_ERROR = "An error occurred while creating a room.";
export const ROOM_NOT_FOUND = "Room not found.";
export const STORY_ENDED = "The story has concluded.";
export const UNKNOWN_ERROR = "An unknown error occurred.";
export const passedTurnMessage = (playerName: string) =>
  `${playerName} has passed their turn.`;
export const rescindVoteToEndMessage = (playerName: string) =>
  `${playerName} has rescinded their vote to end the story.`;
export const votedToEndMessage = (playerName: string) =>
  `${playerName} has voted to end the story here.`;
