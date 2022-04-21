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
    MuktaMalarBold: require("../../assets/fonts/MuktaMalar-Bold.ttf"),
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
    timeGame,
    isCheckedMuletillas,
    isCheckedInsultos,
    gameState,
    setGameState,
    teamOneColor,
    teamTwoColor,
    teamOneName,
    teamTwoName,
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

  const inGameView = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./media/patternpad.png")}
          style={styles.image}
        />
        <View style={styles.mainContainer}>
          <View style={[styles.titleContainer, { top: "8%" }]}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 30,
                color: "white",
                backgroundColor: "#7b2cbf",
              }}
            >
              TABLU FAMOSOS
            </Text>
          </View>
          <View style={styles.gamingPad}>
            <View style={styles.gamingPadLeft}>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "LuckiestGuy",
                  fontSize: 17,
                  color: "black",
                  position: "absolute",
                  top: "22%",
                }}
              >
                Ronda:
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "LuckiestGuy",
                  fontSize: 18,
                  color: "black",
                  position: "absolute",
                  top: "30%",
                }}
              >
                1/15
              </Text>
              <View style={styles.gamingCounter}>
                <Text
                  adjustsFontSizeToFit
                  style={{
                    fontFamily: "MuktaMalarBold",
                    fontSize: 44,
                    color: "white",
                  }}
                >
                  60
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadCenter}>
              <View style={styles.cardView}>
                <Text
                  adjustsFontSizeToFit
                  style={[styles.cardName, { top: "5%", position: "absolute" }]}
                >
                  Susana
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardName,
                    { top: "17%", position: "absolute" },
                  ]}
                >
                  Gimenez
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "33%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "43%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "53%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "63%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "73%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "83%", position: "absolute" },
                  ]}
                >
                  Word1
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadRight}>
              <TouchableOpacity
                onPress={() => {
                  alert("je");
                }}
                style={[
                  styles.pointBtn,
                  { top: "10%", backgroundColor: "#295b16" },
                ]}
              >
                <Text
                  adjustsFontSizeToFit
                  style={{
                    fontFamily: "LuckiestGuy",
                    fontSize: 25,
                    color: "white",
                  }}
                >
                  +1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("je");
                }}
                style={[
                  styles.pointBtn,
                  { top: "42.5%", backgroundColor: "#ba0000" },
                ]}
              >
                <Text
                  adjustsFontSizeToFit
                  style={{
                    fontFamily: "LuckiestGuy",
                    fontSize: 25,
                    color: "white",
                  }}
                >
                  -1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("je");
                }}
                style={[
                  styles.pointBtn,
                  {
                    bottom: "5%",
                    backgroundColor: "#30392d",
                  },
                ]}
              >
                <Text
                  adjustsFontSizeToFit
                  style={{
                    fontFamily: "LuckiestGuy",
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Pasar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              alert("je");
            }}
            style={styles.closeBtn}
          >
            <Text style={styles.closeBtnTxt}>X</Text>
          </TouchableOpacity>
          <View style={styles.turnToTeam}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 18,
                color: "white",
              }}
            >
              Turno del equipo: variable
            </Text>
          </View>
          <View style={styles.gamingPadFooter}>
            <View
              style={[
                styles.teamsBadges,
                { left: "4%", backgroundColor: teamOneColor },
              ]}
            >
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 18,
                  color: "black",
                  position: "absolute",
                  top: "17%",
                }}
              >
                {teamOneName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 25,
                  color: "black",
                  position: "absolute",
                  top: "50%",
                }}
              >
                0
              </Text>
            </View>

            <View
              style={[
                styles.teamsBadges,
                { right: "5%", backgroundColor: teamTwoColor },
              ]}
            >
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 18,
                  color: "black",
                  position: "absolute",
                  top: "17%",
                }}
              >
                {teamTwoName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 25,
                  color: "black",
                  position: "absolute",
                  top: "50%",
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const preGameView = () => {
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
  };

  {
    if (gameState == "preGame") {
      return preGameView();
    }
    if (gameState == "inGame") {
      return inGameView();
    }
  }
}
