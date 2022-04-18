import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./game";
import { useContext, useState } from "react";
import ConfigModal from "../config/config";
import RulesModal from "../rules/rules";
import { Context } from "../../context/AppContext";
import { ImageBackground } from "react-native";

import { useFonts } from "expo-font";

export default function TabluApp() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy: require("../../assets/fonts/LuckiestGuyRegular.ttf"),
    MuktaMalar: require("../../assets/fonts/MuktaMalar-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
          <Text
            style={{
              fontFamily: "MuktaMalar",
              fontSize: 18,
              color: "white",
            }}
          >
            Configuración
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setRulesModalActive(true);
        }}
        style={styles.btnRules}
      >
        <View style={styles.insideBtnTextView}>
          <Text
            style={{
              fontFamily: "MuktaMalar",
              fontSize: 18,
              color: "white",
            }}
          >
            Reglas
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setRulesModalActive(true);
        }}
        style={styles.btnStart}
      >
        <View style={styles.insideBtnTextView}>
          <Text
            style={{
              fontFamily: "MuktaMalar",
              fontSize: 18,
              color: "white",
            }}
          >
            Comenzar
          </Text>
        </View>
      </TouchableOpacity>
      {configModalActive && <ConfigModal />}
      {rulesModalActive && <RulesModal />}
    </View>
  );
}
