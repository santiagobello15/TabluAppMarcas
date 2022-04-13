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
import { useContext, useState } from "react";
import ConfigModal from "./components/config";
import { Context } from "./context/AppContext";

export default function TabluApp() {
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });
  const { configModalActive, setConfigModalActive } = useContext<any>(Context);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./media/patternpad.png")}
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontFamily: "LuckiestGuy_400Regular",
              fontSize: 42,
              color: "white",
            }}
          >
            TABLU FAMOSOS
          </Text>
        </View>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => {
            setConfigModalActive(true);
          }}
          style={styles.btnConfig}
        >
          <View style={styles.insideBtnTextView}>
            <Text style={styles.insideBtnText}>Configuración</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert(configModalActive);
          }}
          style={styles.btnRules}
        >
          <View style={styles.insideBtnTextView}>
            <Text style={styles.insideBtnText}>Reglas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("You tapped the button!");
          }}
          style={styles.btnStart}
        >
          <View style={styles.insideBtnTextView}>
            <Text style={styles.insideBtnText}>Comenzar</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      {/* {configModalActive && <ConfigModal />} */}
    </View>
  );
}
