import { createContext, useState } from "react";

export const Context = createContext({} as ContextState);

interface ContextState {
  configModalActive: boolean | null;
  rulesModalActive: boolean | null;
  setConfigModalActive: any | null;
  setRulesModalActive: any | null;
}
const GameContext = ({ children }: any) => {
  const [configModalActive, setConfigModalActive] = useState(false);
  const [rulesModalActive, setRulesModalActive] = useState(false);
  return (
    <Context.Provider
      value={{
        configModalActive,
        setConfigModalActive,
        rulesModalActive,
        setRulesModalActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GameContext;
