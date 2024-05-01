export const textColors = [
  "#b15928",
  "#ffff99",
  "#6a3d9a",
  "#cab2d6",
  "#ff7f00",
  "#fdbf6f",
  "#e31a1c",
  "#fb9a99",
  "#33a02c",
  "#b2df8a",
  "#1f78b4",
  "#a6cee3",
];

export type Player = {
  playerName: string;
  ready: boolean;
  textColor: string;
  turnActive: boolean;
  votingToEnd: boolean;
};

export type Word = { author: string; word: string };

export type Paragraph = Word[];

export type Story = Paragraph[];

export type Room = {
  code: string;
  gameStarted: boolean;
  players: Player[];
  story: Story;
};

export enum ClientToServerEventName {
  CREATE_ROOM = "create-room",
  DISCONNECT = "disconnect",
  JOIN_ROOM = "join-room",
  LEAVE_ROOM = "leave-room",
  PASS_TURN = "pass-turn",
  SEND_WORD = "send-word",
  SET_NAME = "set-name",
  TOGGLE_READY = "toggle-ready",
  VOTE_TO_END = "vote-to-end",
}

export enum ServerToClientEventName {
  ERROR = "error",
  INFO = "info",
  NAME_SET = "name-set",
  ROOM_CREATED = "room-created",
  ROOM_JOINED = "room-joined",
  ROOM_LEFT = "room-left",
  ROOM_UPDATED = "room-updated",
}

export interface ServerToClientEvents {
  [ServerToClientEventName.ERROR]: (errorMessage: string) => void;
  [ServerToClientEventName.INFO]: (infoMessage: string) => void;
  [ServerToClientEventName.ROOM_CREATED]: (room: Room) => void;
  [ServerToClientEventName.ROOM_JOINED]: (room: Room) => void;
  [ServerToClientEventName.ROOM_LEFT]: () => void;
  [ServerToClientEventName.ROOM_UPDATED]: (room: Room) => void;
}

export interface ClientToServerEvents {
  [ClientToServerEventName.CREATE_ROOM]: (playerName: string) => void;
  [ClientToServerEventName.JOIN_ROOM]: (
    playerName: string,
    roomCode: string
  ) => void;
  [ClientToServerEventName.LEAVE_ROOM]: () => void;
  [ClientToServerEventName.PASS_TURN]: (command: string) => void;
  [ClientToServerEventName.SEND_WORD]: (newWord: string) => void;
  [ClientToServerEventName.VOTE_TO_END]: (command: string) => void;
  [ClientToServerEventName.TOGGLE_READY]: () => void;
}

export interface SocketData extends Omit<Player, "textColor"> {
  roomId: string;
}

export enum Route {
  PLACEHOLDER = "/api/placeholder",
}

export type SocketEvent = "connect" | "disconnect";

export enum SlashCommands {
  PARAGRAPH_BREAK = "/par",
  PASS_TURN = "/pas",
  VOTE_TO_END = "/end",
}
