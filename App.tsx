import GameContext from "./context/AppContext";
import TabluApp from "./components/game/game";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy: require("./assets/fonts/LuckiestGuyRegular.ttf"),
    MuktaMalar: require("./assets/fonts/MuktaMalar-Medium.ttf"),
    MuktaMalarLight: require("./assets/fonts/MuktaMalar-Light.ttf"),
    MuktaMalarBold: require("./assets/fonts/MuktaMalar-Bold.ttf"),
  });

  const loadingFonts = () => {
    if (!fontsLoaded) {
      return (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0d1117",
          }}
        ></View>
      );
    } else {
      return (
        <GameContext>
          <TabluApp />
        </GameContext>
      );
    }
  };

  return <>{loadingFonts()}</>;
}
