import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { styles } from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
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
    setTime,
    startCounter,
    setStartCounter,
    quitInGameModalActive,
    setQuitInGameModalActive,
    cardsDB,
    setcardsDB,
    currentCard,
    setCurrentCard,
    indexOnShuffled,
    setIndexOnShuffled,
    time,
    rulesActive,
    setRulesActive,
    configActive,
    setConfigActive,
    startActive,
    setStartActive,
    setQuitInGameActive,
    showCelebClaps,
    setShowCelebClaps,
  } = useContext(Context);

  const [disableBtn, setDisableBtn] = useState(false);

  const FetchDatafromDB = async () => {
    if (cardsDB == undefined) {
      await fetch("https://tablugames.com/api/cardsFamosos")
        .then((response) => response.json())
        .then((data) => {
          setcardsDB(data.CardsArray);
        });
    }
  };

  FetchDatafromDB();

  useEffect(() => {
    // changed from function to useeffect. is not possible to setstate insite setstate function ?
    if (cardsDB !== undefined) {
      if (
        indexOnShuffled ==
        Object.keys(
          Array.from({ length: Object.keys(cardsDB).length }, (v, k) => k + 1)
        ).length -
          2
      ) {
        setIndexOnShuffled(0);
      }
    }
  }, [indexOnShuffled]);

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

  useEffect(() => {
    // changed from function to useeffect. is not possible to setstate insite setstate function ?
    if (time == 0.0) {
      setStartCounter(false);
      setTime(timeGame);
      setCurrentRound(currentRound + 1);
      if (assignedTeamOne == true) {
        setAssignedTeamOne(false);
      } else {
        setAssignedTeamOne(true);
      }
    }
  }, [time]);

  useEffect(() => {
    // changed from function to useeffect. is not possible to setstate insite setstate function ?
    if (time == 0.0 && currentRound == roundsGame) {
      setGameState("afterGame");
    }
  }, [time, currentRound, roundsGame]);

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

  /*   const GameOver = () => {
    if (time == 0.0 && currentRound == roundsGame) {
      setGameState("afterGame");
    }
  }; */

  const [intervalID, setIntervalID] = useState(null);
  const hasTimerEnded = time <= 0;
  const isTimerRunning = intervalID != null;

  const update = () => {
    setTime((time) => time - 1);
  };
  const startTimer = () => {
    if (!hasTimerEnded && !isTimerRunning) {
      setIntervalID(setInterval(update, 1000));
    }
    setStartCounter(true);
  };
  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null);
    setStartCounter(false);
  };

  const resetTimer = () => {
    setTime(timeGame);
  };
  // clear interval when the timer ends
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalID);
      setIntervalID(null);
    }
  }, [hasTimerEnded]);
  // clear interval when component unmounts
  useEffect(
    () => () => {
      clearInterval(intervalID);
    },
    []
  );

  useEffect(() => {
    StopOrCount();
  }, [startCounter]);

  const StopOrCount = () => {
    if (startCounter == false) {
      return (
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            zIndex: 9,
          }}
          key={time}
        >
          <TouchableOpacity
            onPress={() => {
              startTimer();
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              {
                resetTimer();
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
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{ width: "100%", height: "100%", alignItems: "center" }}
          key={time}
        >
          <TouchableOpacity
            onPress={() => {
              stopTimer();
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
        </View>
      );
    }
  };

  const AddPoints = () => {
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne + 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo + 1);
    }
  };

  const DeductPoints = () => {
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne - 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo - 1);
    }
  };

  const Pasar = () => {
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
  };

  const pivotDisable = () => {
    if (disableBtn == true) {
      return true;
    }
    if (disableBtn == false) {
      return false;
    }
  };
  const _handlePressButtonTwitter = () => {
    WebBrowser.openBrowserAsync(
      'https://twitter.com/intent/tweet?text=¡Qué%20divertido%20jugar%20%23TabluGames!%0AProb%C3%A1%20jugando%20con%20amigos.%0Awww.tablugames.com"'
    );
  };
  const _handlePressButtonFacebook = () => {
    WebBrowser.openBrowserAsync(
      "https://facebook.com/sharer/sharer.php?u=https://tablugames.com"
    );
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
                fontSize: 22,
                color: "white",
                backgroundColor: "#7b2cbf",
                textShadowColor: "black",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              <View>
                <Text>{"  "}</Text>
              </View>
              Ganador de la partida:
              <View>
                <Text>{"  "}</Text>
              </View>
            </Text>
          </View>
          <View style={[styles.turnToTeam, { top: "50%", width: "90%" }]}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                backgroundColor: "#7b2cbf",
                color: "white",
                textShadowColor: "black",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              <View>
                <Text>{"  "}</Text>
              </View>
              {renderGameResult()}
              <View>
                <Text>{"  "}</Text>
              </View>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowCelebClaps(true);
              setTimeout(() => setDisableBtn(true), 1);
              setTimeout(() => setDisableBtn(false), 1500);
              setTimeout(() => setShowCelebClaps(false), 500);
              setDisableBtn(false);
            }}
            style={styles.clapBtn}
            disabled={pivotDisable()}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 25,
                color: "black",
                textShadowColor: "#fafafa",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              Aplaudir
            </Text>
          </TouchableOpacity>
          {clapsCelebration()}
          <TouchableOpacity
            onPress={_handlePressButtonTwitter}
            style={styles.twitterBtn}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              source={require("./media/twitter.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_handlePressButtonFacebook}
            style={styles.facebookBtn}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              source={require("./media/facebook.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGameState("preGame");
              stopTimer();
              setStartCounter(false);
              setCurrentRound(1);
              setPointsTeamOne(0);
              setPointsTeamTwo(0);
              setAssignedTeamOne(true);
              setTime(timeGame);
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

  const inGameView = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./media/patternpad.png")}
          style={styles.image}
        />
        <View style={styles.mainContainer}>
          {StopOrCount()}
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
                    fontFamily: "LuckiestGuy",
                    fontSize: 32,
                    color: "white",
                  }}
                >
                  {time}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadCenter}>
              <View style={styles.cardView}>
                <Text
                  adjustsFontSizeToFit
                  style={[styles.cardName, { top: "5%", position: "absolute" }]}
                >
                  {cardsDB[indexOnShuffled].firstname}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardName,
                    { top: "17%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].lastname}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "33%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word1}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "43%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word2}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "53%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word3}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "63%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word4}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "73%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word5}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "83%", position: "absolute" },
                  ]}
                >
                  {cardsDB[indexOnShuffled].word6}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadRight}>
              <TouchableOpacity
                onPress={() => {
                  AddPoints();
                }}
                style={[
                  styles.pointBtn,
                  {
                    top: "10%",
                    backgroundColor: "#13e013",
                  },
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
                  { top: "42.5%", backgroundColor: "#ff0000" },
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
          <View style={styles.turnToTeam}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 18,
                color: "#7b2cbf",
                textShadowColor: "black",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
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
                  color: "white",
                  position: "absolute",
                  top: "17%",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                }}
              >
                {teamOneName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 25,
                  color: "white",
                  position: "absolute",
                  bottom: "2%",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
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
                  color: "white",
                  position: "absolute",
                  top: "17%",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                }}
              >
                {teamTwoName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={{
                  fontFamily: "MuktaMalarBold",
                  fontSize: 25,
                  color: "white",
                  position: "absolute",
                  bottom: "2%",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                }}
              >
                {pointsTeamTwo}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              setQuitInGameActive(true);
              setQuitInGameModalActive(true);
              stopTimer();
            }}
            style={styles.closeBtn}
          >
            <Text style={styles.closeBtnTxt}>X</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
        {quitInGameModalActive && <QuitInGame />}
      </View>
    );
  };

  const preGameView = () => {
    if (cardsDB == undefined) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontFamily: "LuckiestGuy",

              color: "black",
            }}
          >
            Cargando
          </Text>
        </View>
      );
    } else {
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
                setConfigActive(true);
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
                setRulesActive(true);
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
                setStartActive(true);
                cardsDB.sort(() => 0.5 - Math.random());
                setTime(timeGame);
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
    }
  };

  const clapMove = useRef(new Animated.Value(0)).current;
  const clapOpac = useRef(new Animated.Value(0)).current;

  const clapsAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (showCelebClaps == true) {
      Animated.timing(clapMove, {
        toValue: -311,
        useNativeDriver: true,
        duration: 1000,
      }).start();
      Animated.timing(clapOpac, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }).start();
    }

    setTimeout(
      () =>
        Animated.timing(clapMove, {
          toValue: 311,
          useNativeDriver: true,
          duration: 500,
        }).start(),
      1000
    );
    setTimeout(
      () =>
        Animated.timing(clapOpac, {
          toValue: 1,
          useNativeDriver: true,
          duration: 5,
        }).start(),
      1000
    );
  };

  clapsAnimation();

  const clapsCelebration = () => {
    if (showCelebClaps == true) {
      return (
        <Animated.Image
          style={[
            {
              width: 20,
              height: 20,
              bottom: "60%",
              zIndex: 999999999,
              position: "absolute",
            },
            { translateY: clapMove, opacity: clapOpac },
          ]}
          source={require("./media/clapsImg.png")}
        ></Animated.Image>
      );
    }
  };

  clapsCelebration();

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
