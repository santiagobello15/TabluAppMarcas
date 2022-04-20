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
    isCheckedMuletillas,
    setCheckedMuletillas,
    isCheckedInsultos,
    setCheckedInsultos,
  } = useContext<any>(Context);

  const muletillaFunction = () => {
    if (isCheckedMuletillas == false) {
      return "Sin penalización por muletillas";
    } else {
      return "Penalización por muletillas";
    }
  };
  const insultosFunction = () => {
    if (isCheckedInsultos == false) {
      return "Sin penalización por insultos";
    } else {
      return "Penalización por insultos";
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./media/patternpad.png")}
        style={styles.image}
      />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text
            adjustsFontSizeToFit
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
        <View style={styles.view1holder}>
          <View style={styles.view1up}>
            <Text adjustsFontSizeToFit style={styles.view1txt}>
              Rondas
            </Text>
          </View>
          <View style={styles.view1}>
            <Text
              style={{
                fontFamily: "MuktaMalarLight",
                color: "#fafafa",
                fontSize: 40,
              }}
            >
              {roundsGame}
            </Text>
          </View>
        </View>
        <View style={styles.view2holder}>
          <View style={styles.view2up}>
            <Text adjustsFontSizeToFit style={styles.view2txt}>
              Tiempo
            </Text>
          </View>
          <View style={styles.view2}>
            <Text
              style={{
                fontFamily: "MuktaMalarLight",
                color: "#fafafa",
                fontSize: 40,
              }}
            >
              {timeGame}''
            </Text>
          </View>
        </View>
        <View style={styles.view3holder}>
          <View style={styles.view3up}>
            <Text style={styles.view3txt}>Extra #1</Text>
          </View>
          <View style={styles.view3}>
            <Text
              style={{
                fontFamily: "MuktaMalar",
                color: "#fafafa",
                fontSize: 10,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              {muletillaFunction()}
            </Text>
          </View>
        </View>
        <View style={styles.view4holder}>
          <View style={styles.view4up}>
            <Text style={styles.view4txt}>Extra #2</Text>
          </View>
          <View style={styles.view4}>
            <Text
              style={{
                fontFamily: "MuktaMalar",
                color: "#fafafa",
                fontSize: 10,
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              {insultosFunction()}
            </Text>
          </View>
        </View>
      </View>
      {configModalActive && <ConfigModal />}
      {rulesModalActive && <RulesModal />}
      {startModalActive && <StartModal />}
    </View>
  );
}
