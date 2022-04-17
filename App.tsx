import GameContext from "./context/AppContext";
import TabluApp from "./components/game/TabluApp";
export default function App() {
  return (
    <GameContext>
      <TabluApp />
    </GameContext>
  );
}
