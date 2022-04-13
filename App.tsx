import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles/game";
import {
  useFonts,
  LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy";

export default function App() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./media/patternpad.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>TABLU FAMOSOS</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => {
            alert("You tapped the button!");
          }}
          title="Press Me"
          style={styles.btn}
        ></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
