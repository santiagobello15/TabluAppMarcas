import { createContext, useState } from "react";

export const Context = createContext({} as ContextState);

interface ContextState {
  configModalActive: boolean | null;
  setConfigModalActive: any | null;
}
const GameContext = ({ children }: any) => {
  const [configModalActive, setConfigModalActive] = useState(false);
  return (
    <Context.Provider value={{ configModalActive, setConfigModalActive }}>
      {children}
    </Context.Provider>
  );
};
export default GameContext;
