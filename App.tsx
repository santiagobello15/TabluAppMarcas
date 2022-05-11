import GameContext from "./context/AppContext";
import TabluApp from "./components/game/game";
import { useFonts } from "expo-font";
import { Text, View, Image } from "react-native";

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
        >
          <Image
            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
            source={require("./assets/splash.png")}
          ></Image>
        </View>
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
