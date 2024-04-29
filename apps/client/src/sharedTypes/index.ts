export type Player = {
  playerName: string;
  ready: boolean;
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
  SEND_WORD = "send-word",
  SET_NAME = "set-name",
  TOGGLE_READY = "toggle-ready",
}

export enum ServerToClientEventName {
  ERROR = "error",
  NAME_SET = "name-set",
  ROOM_CREATED = "room-created",
  ROOM_JOINED = "room-joined",
  ROOM_LEFT = "room-left",
  ROOM_UPDATED = "room-updated",
}

export interface ServerToClientEvents {
  [ServerToClientEventName.ERROR]: (errorMessage: string) => void;
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
  [ClientToServerEventName.SEND_WORD]: (newWord: string) => void;
  [ClientToServerEventName.TOGGLE_READY]: () => void;
}

export interface SocketData extends Player {
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
