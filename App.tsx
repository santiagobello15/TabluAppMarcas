import GameContext from "./context/AppContext";
import TabluApp from "./TabluApp";
export default function App() {
  return <GameContext>{TabluApp()}</GameContext>;
}
