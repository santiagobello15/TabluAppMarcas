import { createContext, useState } from "react";

export const Context = createContext({} as ContextState);

interface ContextState {
  configModalActive: boolean | null;
  rulesModalActive: boolean | null;
  startModalActive: boolean | null;
  setConfigModalActive: any | null;
  setRulesModalActive: any | null;
  setStartModalActive: any | null;
}
const GameContext = ({ children }: any) => {
  const [configModalActive, setConfigModalActive] = useState(false);
  const [rulesModalActive, setRulesModalActive] = useState(false);
  const [startModalActive, setStartModalActive] = useState(false);
  return (
    <Context.Provider
      value={{
        configModalActive,
        setConfigModalActive,
        rulesModalActive,
        setRulesModalActive,
        startModalActive,
        setStartModalActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GameContext;
