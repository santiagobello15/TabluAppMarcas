import GameContext from "./context/AppContext";
import TabluApp from "./components/game/game";
export default function App() {
  return (
    <GameContext>
      <TabluApp />
    </GameContext>
  );
}
