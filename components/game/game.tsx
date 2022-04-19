import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import ConfigModal from "../config/config";
import RulesModal from "../rules/rules";
import StartModal from "../start/start";
import { Context } from "../../context/AppContext";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";

export default function TabluApp() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy: require("../../assets/fonts/LuckiestGuyRegular.ttf"),
    MuktaMalar: require("../../assets/fonts/MuktaMalar-Medium.ttf"),
    MuktaMalarLight: require("../../assets/fonts/MuktaMalar-Light.ttf"),
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
    startModalActive,
    setStartModalActive,
    roundsGame,
    setRoundsGame,
    timeGame,
    setTimeGame,
  } = useContext<any>(Context);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./media/patternpad.png")}
        style={styles.image}
      />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontFamily: "LuckiestGuy",
              fontSize: 42,
              color: "white",
              backgroundColor: "#7b2cbf",
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
            setStartModalActive(true);
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
        <View style={styles.view1}>
          <Text style={styles.view1txt}>Rondas</Text>
          <Text
            style={{
              fontFamily: "MuktaMalarLight",
              color: "#fafafa",
              fontSize: 40,
              top: -10,
            }}
          >
            {roundsGame}
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.view2txt}>Tiempo</Text>
          <Text
            style={{
              fontFamily: "MuktaMalarLight",
              color: "#fafafa",
              fontSize: 40,
              top: -10,
            }}
          >
            {timeGame}''
          </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.view3txt}>Extra #1</Text>
          <Text
            style={{
              fontFamily: "MuktaMalar",
              color: "#fafafa",
              fontSize: 10,
              paddingLeft: 2,
              paddingRight: 2,
              top: -7,
            }}
          >
            Sin penalización por muletilla
          </Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.view4txt}>Extra #2</Text>
          <Text
            style={{
              fontFamily: "MuktaMalar",
              color: "#fafafa",
              fontSize: 10,
              paddingLeft: 2,
              paddingRight: 2,
              top: -7,
            }}
          >
            Sin penalización por insultos
          </Text>
        </View>
      </View>
      {configModalActive && <ConfigModal />}
      {rulesModalActive && <RulesModal />}
      {startModalActive && <StartModal />}
    </View>
  );
}
