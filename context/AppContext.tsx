import { createContext, useState } from "react";
import { useFonts } from "expo-font";
export const Context = createContext({} as ContextState);

interface ContextState {
  configModalActive: boolean | null;
  rulesModalActive: boolean | null;
  startModalActive: boolean | null;
  isCheckedMuletillas: boolean | null;
  isCheckedInsultos: boolean | null;
  setCheckedMuletillas: any | null;
  setCheckedInsultos: any | null;
  setConfigModalActive: any | null;
  setRulesModalActive: any | null;
  setStartModalActive: any | null;
  roundsGame: number | null;
  timeGame: number | null;
  setTimeGame: any | null;
  setRoundsGame: any | null;
}
const GameContext = ({ children }: any) => {
  const [configModalActive, setConfigModalActive] = useState(false);
  const [rulesModalActive, setRulesModalActive] = useState(false);
  const [startModalActive, setStartModalActive] = useState(false);
  const [roundsGame, setRoundsGame] = useState(15);
  const [timeGame, setTimeGame] = useState(60);
  const [isCheckedMuletillas, setCheckedMuletillas] = useState(false);
  const [isCheckedInsultos, setCheckedInsultos] = useState(false);

  return (
    <Context.Provider
      value={{
        configModalActive,
        setConfigModalActive,
        rulesModalActive,
        setRulesModalActive,
        startModalActive,
        setStartModalActive,
        roundsGame,
        setRoundsGame,
        timeGame,
        setTimeGame,
        isCheckedMuletillas,
        setCheckedMuletillas,
        isCheckedInsultos,
        setCheckedInsultos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GameContext;
