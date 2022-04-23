import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import ConfigModal from "../config/config";
import RulesModal from "../rules/rules";
import QuitInGame from "../quitInGame/quitInGame";
import StartModal from "../start/start";
import { Context } from "../../context/AppContext";

export default function TabluApp() {
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
    pointsTeamOne,
    setPointsTeamOne,
    pointsTeamTwo,
    setPointsTeamTwo,
    assignedTeamOne,
    setAssignedTeamOne,
    currentRound,
    setCurrentRound,
    countDownGame,
    setCountDownGame,
    startCounter,
    setStartCounter,
    quitInGameModalActive,
    setQuitInGameModalActive,
    cardsDB,
    setcardsDB,
    currentCard,
    setCurrentCard,
  } = useContext(Context);

  const FetchDatafromDB = async () => {
    await fetch("https://tablu.vercel.app/api/cards")
      .then((response) => response.json())
      .then((data) => {
        setcardsDB(data.CardsArray);
      });
  };

  const pivot4dev = () => {
    if (cardsDB !== undefined) {
      if (currentCard == Object.keys(cardsDB).length - 1) {
        setCurrentCard(0);
      }
    }
  };
  pivot4dev();

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

  const teamTurn = () => {
    if (assignedTeamOne == true) {
      return " " + teamOneName;
    } else {
      return " " + teamTwoName;
    }
  };

  const FinishedAlert = () => {
    if (countDownGame == 0.0) {
      setCountDownGame(timeGame);
      setStartCounter(false);
      setCurrentRound(currentRound + 1);
      if (assignedTeamOne == true) {
        setAssignedTeamOne(false);
      } else {
        setAssignedTeamOne(true);
      }
    }
  };

  const renderGameResult = () => {
    if (pointsTeamOne == pointsTeamTwo) {
      return "Ninguno! Empate";
    }
    if (pointsTeamOne > pointsTeamTwo) {
      return teamOneName;
    } else {
      return teamTwoName;
    }
  };

  const GameOver = () => {
    if (countDownGame == 0.0 && currentRound == roundsGame) {
      setGameState("afterGame");
    }
  };

  useEffect(() => {
    if (startCounter == true) {
      countDownGame > 0 &&
        setTimeout(() => setCountDownGame((countDownGame - 0.1).toFixed(1)), 1);
    }
  });

  const StopOrCount = () => {
    if (startCounter == false) {
      return [
        <TouchableOpacity
          onPress={() => {
            setStartCounter(true);
          }}
          style={styles.startBtn}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 18,
              color: "white",
            }}
          >
            Iniciar
          </Text>
        </TouchableOpacity>,
        <TouchableOpacity
          onPress={() => {
            {
              setCountDownGame(timeGame);
            }
          }}
          style={styles.restartBtn}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 18,
              color: "white",
            }}
          >
            Reiniciar
          </Text>
        </TouchableOpacity>,
      ];
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            Pasar();
            setStartCounter(false);
          }}
          style={[styles.startBtn, { backgroundColor: "red" }]}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 18,
              color: "white",
            }}
          >
            Pausar
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const AddPoints = () => {
    setCurrentCard(currentCard + 1);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne + 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo + 1);
    }
  };

  const DeductPoints = () => {
    setCurrentCard(currentCard + 1);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne - 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo - 1);
    }
  };

  const Pasar = () => {
    setCurrentCard(currentCard + 1);
  };

  const afterGameView = () => {
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
          <View style={[styles.turnToTeam, { top: "40%", width: "90%" }]}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
              }}
            >
              Ganador de la partida:
            </Text>
          </View>
          <View style={[styles.turnToTeam, { top: "50%", width: "90%" }]}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
              }}
            >
              {renderGameResult()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setGameState("preGame");
              setCountDownGame(timeGame);
              setStartCounter(false);
              setCurrentRound(1);
              setPointsTeamOne(0);
              setPointsTeamTwo(0);
              setAssignedTeamOne(true);
            }}
            style={styles.closeBtn}
          >
            <Text style={styles.closeBtnTxt}>X</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  };

  const inGameViewFunctions: any = () => {
    return [StopOrCount(), FinishedAlert(), GameOver()];
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
                {currentRound}/{roundsGame}
              </Text>
              <View style={styles.gamingCounter}>
                <Text
                  adjustsFontSizeToFit
                  style={{
                    fontFamily: "MuktaMalarBold",
                    fontSize: 35,
                    color: "white",
                  }}
                >
                  {countDownGame}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadCenter}>
              <View style={styles.cardView}>
                <Text
                  adjustsFontSizeToFit
                  style={[styles.cardName, { top: "5%", position: "absolute" }]}
                >
                  {JSON.stringify(cardsDB[currentCard].firstname)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardName,
                    { top: "17%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].lastname)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "33%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word1)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "43%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word2)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "53%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word3)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "63%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word4)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "73%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word5)}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "83%", position: "absolute" },
                  ]}
                >
                  {JSON.stringify(cardsDB[currentCard].word6)}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadRight}>
              <TouchableOpacity
                onPress={() => {
                  {
                    AddPoints();
                  }
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
                  {
                    DeductPoints();
                  }
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
                  Pasar();
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
              setQuitInGameModalActive(true);
              /*  setGameState("preGame"); */
              setStartCounter(false);
              setCountDownGame(timeGame);
              setCurrentRound(1);
              setPointsTeamOne(0);
              setPointsTeamTwo(0);
              setAssignedTeamOne(true);
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
              Turno del equipo:
              {teamTurn()}
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
                {pointsTeamOne}
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
                {pointsTeamTwo}
              </Text>
            </View>
          </View>
          {inGameViewFunctions()}
        </View>

        <StatusBar style="auto" />
        {quitInGameModalActive && <QuitInGame />}
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
              FetchDatafromDB();
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
        {quitInGameModalActive && <QuitInGame />}
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
    if (gameState == "afterGame") return afterGameView();
  }
}
