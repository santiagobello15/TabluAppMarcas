import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./game";
/* import {
  useFonts,
  LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy"; */
import { useContext, useState } from "react";
import ConfigModal from "../config/config";
import RulesModal from "../rules/rules";
import { Context } from "../../context/AppContext";
import { ImageBackground } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function TabluApp() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy: require("../../assets/fonts/LuckiestGuyRegular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  /*  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  }); */
  const {
    configModalActive,
    setConfigModalActive,
    rulesModalActive,
    setRulesModalActive,
  } = useContext<any>(Context);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./media/patternpad.png")}
        style={styles.image}
      />

      <View style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: "LuckiestGuy",
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
          setRulesModalActive(true);
        }}
        style={styles.btnRules}
      >
        <View style={styles.insideBtnTextView}>
          <Text style={styles.insideBtnText}>Reglas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setRulesModalActive(true);
        }}
        style={styles.btnStart}
      >
        <View style={styles.insideBtnTextView}>
          <Text style={styles.insideBtnText}>Comenzar</Text>
        </View>
      </TouchableOpacity>
      {configModalActive && <ConfigModal />}
      {rulesModalActive && <RulesModal />}
    </View>
  );
}
