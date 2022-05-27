import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated, BackHandler
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { styles } from "./styles";
import { useContext, useEffect, useState, useRef } from "react";
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
    limitWidth,
    deviceWidth,
  } = useContext(Context);

  const [plusPoint, setPlusPoint] = useState(true);
  const [minusPoint, setMinusPoint] = useState(true);
  const [passPoint, setPassPoint] = useState(true);
  const [blockPass, setBlockPass] = useState(false);
  const [blockAdd, setBlockAdd] = useState(false);
  const [blockSubstract, setBlockSubstract] = useState(false);
  const [timeUp, setTimeUp] = useState(true);

  const FetchDatafromDB = async () => {
    if (cardsDB == undefined) {
      await fetch("https://tablugames.com/api/cardsMarcas")
        .then((response) => response.json())
        .then((data) => {
          setcardsDB(data.CardsArray);
        })
        .catch((error) => {
          // retrying to fetch
          console.log(error);
          FetchDatafromDB();
        });
    }
  };

  FetchDatafromDB();

  const blurryField = useRef(new Animated.Value(0)).current;
  const blurryFinish = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (plusPoint == true || minusPoint == true || passPoint == true) {
      setTimeout(() => {
        Animated.timing(blurryField, {
          toValue: 0,
          useNativeDriver: true,
          duration: 500,
        }).start(() => {
          blurryField.setValue(1);
          setPlusPoint(false);
          setMinusPoint(false);
          setPassPoint(false);
        });
      }, 700);
    }
  }, [plusPoint, minusPoint, passPoint]);

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

  useEffect(() => {
    if (timeUp == true) {
      setTimeout(() => {
        Animated.timing(blurryFinish, {
          toValue: 0,
          useNativeDriver: true,
          duration: 1000,
        }).start(() => {
          blurryFinish.setValue(1);
          setTimeUp(false);
        });
      }, 3500);
    }
  });

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
  const BlurTimeUp = () => {
    if (timeUp == true) {
      return (
        <Animated.View
          style={[styles.timeUpBlur, { transform: [{ scale: blurryFinish }] }]}
        >
          <Text
            style={{
              position: "absolute",
              fontFamily: "LuckiestGuy",
              fontSize: 30,
              color: "white",
              zIndex: 99999999,
            }}
          >
            ¡TIEMPO AGOTADO!
          </Text>
        </Animated.View>
      );
    }
  };

  useEffect(() => {
    // changed from function to useeffect. is not possible to setstate insite setstate function ?
    if (time == 0.0) {
      setStartCounter(false);
      setTime(timeGame);
      setTimeUp(true);
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
              style={[
                {
                  fontFamily: "MuktaMalarBold",
                  fontSize: 16,
                  color: "white",
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
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
              style={[
                {
                  fontFamily: "MuktaMalarBold",
                  fontSize: 16,
                  color: "white",
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
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
              style={[
                {
                  fontFamily: "MuktaMalarBold",
                  fontSize: 16,
                  color: "white",
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
            >
              Pausar
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const AddPoints = () => {
    setPlusPoint(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne + 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo + 1);
    }
  };

  const DeductPoints = () => {
    setMinusPoint(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    if (assignedTeamOne == true) {
      setPointsTeamOne(pointsTeamOne - 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo - 1);
    }
  };

  const Pasar = () => {
    setPassPoint(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
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
  const _handlePressButtonWhoIs = () => {
    WebBrowser.openBrowserAsync(
      "http://google.com/search?q=" +
        cardsDB[indexOnShuffled].marca1 +
        " " +
        cardsDB[indexOnShuffled].marca2
    );
  };

  const afterGameView = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/patternpad.png")}
          style={styles.image}
        />
        <View
          style={[
            styles.mainContainer,
            deviceWidth > limitWidth ? styles.mainContainerBig : null,
          ]}
        >
          <View style={[styles.titleContainer, { top: "8%" }]}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 30,
                  color: "white",
                  backgroundColor: "#ff6d00",
                },
                deviceWidth > limitWidth ? { fontSize: 40 } : null,
              ]}
            >
              {" "}
              TABLÚ FAMOSOS{" "}
            </Text>
          </View>

          <View style={[styles.turnToTeam, { top: "40%", width: "90%" }]}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 22,
                  color: "white",
                  backgroundColor: "#ff6d00",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                },
                deviceWidth > limitWidth ? { fontSize: 35 } : null,
              ]}
            >
              {"  "}
              Ganador de la partida:
              {"  "}
            </Text>
          </View>
          <View style={[styles.turnToTeam, { top: "50%", width: "90%" }]}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 20,
                  backgroundColor: "#ff6d00",
                  color: "white",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                },
                deviceWidth > limitWidth ? { fontSize: 30 } : null,
              ]}
            >
              {"  "}
              {renderGameResult()}
              {"  "}
            </Text>
          </View>
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
              source={require("../../assets/images/twitter.png")}
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
              source={require("../../assets/images/facebook.png")}
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
            <Text
              style={[
                styles.closeBtnTxt,
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
            >
              X
            </Text>
          </TouchableOpacity>
          <View style={[styles.gamingPadFooter, { bottom: "18%" }]}>
            <View
              style={[
                styles.teamsBadges,
                { left: "4%", backgroundColor: teamOneColor },
              ]}
            >
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 18,
                    color: "white",
                    position: "absolute",
                    top: "17%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 25 } : null,
                ]}
              >
                {teamOneName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 25,
                    color: "white",
                    position: "absolute",
                    bottom: "2%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 35 } : null,
                ]}
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
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 18,
                    color: "white",
                    position: "absolute",
                    top: "17%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 25 } : null,
                ]}
              >
                {teamTwoName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 25,
                    color: "white",
                    position: "absolute",
                    bottom: "2%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 35 } : null,
                ]}
              >
                {pointsTeamTwo}
              </Text>
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  };

  const BlurAndText = () => {
    if (plusPoint == true) {
      return (
        <Animated.View
          style={[styles.gameCardBlur, { transform: [{ scale: blurryField }] }]}
        >
          <Text
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 25,
              color: "white",
            }}
          >
            +1
          </Text>
        </Animated.View>
      );
    }
    if (minusPoint == true) {
      return (
        <Animated.View
          style={[styles.gameCardBlur, { transform: [{ scale: blurryField }] }]}
        >
          <Text
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 25,
              color: "white",
            }}
          >
            -1
          </Text>
        </Animated.View>
      );
    }
    if (passPoint == true) {
      return (
        <Animated.View
          style={[styles.gameCardBlur, { transform: [{ scale: blurryField }] }]}
        >
          <Text
            style={{
              fontFamily: "MuktaMalarBold",
              fontSize: 25,
              color: "white",
            }}
          >
            Pasar
          </Text>
        </Animated.View>
      );
    }
  };

  useEffect(()=>{
    const backBtnInGame: any = () =>{
      if(gameState == "inGame" && quitInGameModalActive == true){
      setQuitInGameActive(false);
      setQuitInGameModalActive(false);
      return true}
      if(gameState == "inGame" && quitInGameModalActive == false){
        setQuitInGameActive(true);
        setQuitInGameModalActive(true);
        stopTimer();
        return true}
    }
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress", backBtnInGame
    )
  })

  const inGameView = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/patternpad.png")}
          style={styles.image}
        />
        <View
          style={[
            styles.mainContainer,
            deviceWidth > limitWidth ? styles.mainContainerBig : null,
          ]}
        >
          {BlurTimeUp()}
          {StopOrCount()}
          <View style={[styles.titleContainer, { top: "8%" }]}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 30,
                  color: "white",
                  backgroundColor: "#ff6d00",
                },
                deviceWidth > limitWidth ? { fontSize: 40 } : null,
              ]}
            >
              {" "}
              TABLÚ FAMOSOS{" "}
            </Text>
          </View>
          <View style={styles.gamingPad}>
            <View style={styles.gamingPadLeft}>
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={[
                  {
                    fontFamily: "LuckiestGuy",
                    fontSize: 17,
                    color: "black",
                    position: "absolute",
                    top: "22%",
                  },
                  deviceWidth > limitWidth ? { fontSize: 27 } : null,
                ]}
              >
                Ronda:
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "LuckiestGuy",
                    fontSize: 18,
                    color: "black",
                    position: "absolute",
                    top: "30%",
                  },
                  deviceWidth > limitWidth ? { fontSize: 28 } : null,
                ]}
              >
                {currentRound}/{roundsGame}
              </Text>
              <View style={styles.gamingCounter}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "LuckiestGuy",
                      fontSize: 32,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 45 } : null,
                  ]}
                >
                  {time}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadCenter}>
              <TouchableOpacity
                style={styles.whoIs}
                onPress={() => {
                  _handlePressButtonWhoIs();
                }}
              >
                <Text adjustsFontSizeToFit style={{ color: "white" }}>
                  ?
                </Text>
              </TouchableOpacity>
              <View style={styles.cardView}>
                {BlurAndText()}
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardName,
                    { top: "5%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 28 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].marca1}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardName,
                    { top: "17%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 28 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].marca2}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "33%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word1}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "43%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word2}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "53%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word3}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "63%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word4}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "73%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word5}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.cardWord,
                    { top: "83%", position: "absolute" },
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  {cardsDB[indexOnShuffled].word6}
                </Text>
              </View>
            </View>
            <View style={styles.gamingPadRight}>
              <TouchableOpacity
                disabled={blockAdd == true ? true : false}
                onPress={() => {
                  AddPoints();
                  setBlockSubstract(true);
                  setBlockAdd(true);
                  setBlockPass(true);
                  setTimeout(() => setBlockPass(false), 1500);
                  setTimeout(() => setBlockAdd(false), 1500);
                  setTimeout(() => setBlockSubstract(false), 1500);
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
                  style={[
                    {
                      fontFamily: "LuckiestGuy",
                      fontSize: 25,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 36 } : null,
                  ]}
                >
                  +1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={blockSubstract == true ? true : false}
                onPress={() => {
                  {
                    DeductPoints();
                    setBlockSubstract(true);
                    setBlockAdd(true);
                    setBlockPass(true);
                    setTimeout(() => setBlockPass(false), 1500);
                    setTimeout(() => setBlockAdd(false), 1500);
                    setTimeout(() => setBlockSubstract(false), 1500);
                  }
                }}
                style={[
                  styles.pointBtn,
                  { top: "42.5%", backgroundColor: "#ff0000" },
                ]}
              >
                <Text
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "LuckiestGuy",
                      fontSize: 25,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 36 } : null,
                  ]}
                >
                  -1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={blockPass == true ? true : false}
                onPress={() => {
                  Pasar();
                  setBlockSubstract(true);
                  setBlockAdd(true);
                  setBlockPass(true);
                  setTimeout(() => setBlockPass(false), 1500);
                  setTimeout(() => setBlockAdd(false), 1500);
                  setTimeout(() => setBlockSubstract(false), 1500);
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
                  style={[
                    {
                      fontFamily: "LuckiestGuy",
                      fontSize: 15,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 26 } : null,
                  ]}
                >
                  Pasar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.turnToTeam}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 18,
                  color: "#ff6d00",
                  textShadowColor: "black",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
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
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 18,
                    color: "white",
                    position: "absolute",
                    top: "17%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 25 } : null,
                ]}
              >
                {teamOneName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 25,
                    color: "white",
                    position: "absolute",
                    bottom: "2%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 35 } : null,
                ]}
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
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 18,
                    color: "white",
                    position: "absolute",
                    top: "17%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 25 } : null,
                ]}
              >
                {teamTwoName}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "MuktaMalarBold",
                    fontSize: 25,
                    color: "white",
                    position: "absolute",
                    bottom: "2%",
                    textShadowColor: "black",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  },
                  deviceWidth > limitWidth ? { fontSize: 35 } : null,
                ]}
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
            <Text
              style={[
                styles.closeBtnTxt,
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
            >
              X
            </Text>
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
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0d1117",
          }}
        >
          <Image
            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
            source={require("../../assets/splash.png")}
          ></Image>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/patternpad.png")}
            style={styles.image}
          />
          <View
            style={[
              styles.mainContainer,
              deviceWidth > limitWidth ? styles.mainContainerBig : null,
            ]}
          >
            <View style={styles.titleContainer}>
              <Text
                adjustsFontSizeToFit
                style={[
                  {
                    fontFamily: "LuckiestGuy",
                    fontSize: 36,
                    color: "white",
                    backgroundColor: "#ff6d00",
                  },
                  deviceWidth > limitWidth ? { fontSize: 60 } : null,
                ]}
              >
                {" "}
                TABLÚ FAMOSOS{" "}
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
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "MuktaMalar",
                      fontSize: 18,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 26 } : null,
                  ]}
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
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "MuktaMalar",
                      fontSize: 18,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 26 } : null,
                  ]}
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
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "MuktaMalar",
                      fontSize: 18,
                      color: "white",
                    },
                    deviceWidth > limitWidth ? { fontSize: 26 } : null,
                  ]}
                >
                  Comenzar
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.view1holder}>
              <View style={styles.view1up}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.view1txt,
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  Rondas
                </Text>
              </View>
              <View style={styles.view1}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "MuktaMalarLight",
                      color: "#fafafa",
                      fontSize: 40,
                    },
                    deviceWidth > limitWidth ? { fontSize: 60 } : null,
                  ]}
                >
                  {roundsGame}
                </Text>
              </View>
            </View>
            <View style={styles.view2holder}>
              <View style={styles.view2up}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    styles.view2txt,
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  Tiempo
                </Text>
              </View>
              <View style={styles.view2}>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    {
                      fontFamily: "MuktaMalarLight",
                      color: "#fafafa",
                      fontSize: 40,
                    },
                    deviceWidth > limitWidth ? { fontSize: 60 } : null,
                  ]}
                >
                  {timeGame}''
                </Text>
              </View>
            </View>
            <View style={styles.view3holder}>
              <View style={styles.view3up}>
                <Text
                  style={[
                    styles.view3txt,
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  Extra #1
                </Text>
              </View>
              <View style={styles.view3}>
                <Text
                  style={[
                    {
                      fontFamily: "MuktaMalar",
                      color: "#fafafa",
                      fontSize: 10,
                      paddingLeft: 2,
                      paddingRight: 2,
                    },
                    deviceWidth > limitWidth ? { fontSize: 15 } : null,
                  ]}
                >
                  {muletillaFunction()}
                </Text>
              </View>
            </View>
            <View style={styles.view4holder}>
              <View style={styles.view4up}>
                <Text
                  style={[
                    styles.view4txt,
                    deviceWidth > limitWidth ? { fontSize: 20 } : null,
                  ]}
                >
                  Extra #2
                </Text>
              </View>
              <View style={styles.view4}>
                <Text
                  style={[
                    {
                      fontFamily: "MuktaMalar",
                      color: "#fafafa",
                      fontSize: 10,
                      paddingLeft: 2,
                      paddingRight: 2,
                    },
                    deviceWidth > limitWidth ? { fontSize: 15 } : null,
                  ]}
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
