import useGameContext from "./useGameContext";
import GameContext from "./GameContext";
import { FC, PropsWithChildren } from "react";

const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const contextValue = useGameContext();
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
