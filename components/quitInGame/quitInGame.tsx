import { styles } from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import { Context } from "../../context/AppContext";
import { useContext, useRef } from "react";
import { Inter_500Medium } from "@expo-google-fonts/inter";

function QuitInGame() {
  const {
    setQuitInGameModalActive,
    setGameState,
    setTeamOneName,
    setTeamTwoName,
    setPointsTeamOne,
    setPointsTeamTwo,
    setAssignedTeamOne,
    setCurrentRound,
    setCountDownGame,
    setStartCounter,
    timeGame,
    setTeamTwoColor,
    setTeamOneColor,
    quitInGameActive,
    setQuitInGameActive,
    limitWidth,
    deviceWidth,
  } = useContext<any>(Context);

  const modalValue = useRef(new Animated.Value(0)).current;

  const modalAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (quitInGameActive == true) {
      Animated.timing(modalValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
    if (quitInGameActive == false) {
      Animated.timing(modalValue, {
        toValue: 0,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
  };

  modalAnimation();

  return (
    <View style={styles.overlayModal}>
      <Animated.View
        style={[
          styles.mainModal,
          { opacity: modalValue },
          deviceWidth > limitWidth ? styles.mainModalBig : null,
        ]}
      >
        <ImageBackground
          source={require("../../assets/images/patternpad.png")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <View
            style={{
              width: "100%",
              height: "50%",
              position: "absolute",
              top: "0%",
              alignItems: "center",
              backgroundColor: "#ff6d00",
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 20,
                  color: "white",
                },
                deviceWidth > limitWidth ? { fontSize: 30 } : null,
              ]}
            >
              ¿SEGURO DESEAS SALIR?
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              position: "absolute",
              height: "50%",
              top: "49%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "#ff8500",
                },
                deviceWidth > limitWidth ? { fontSize: 30 } : null,
              ]}
            >
              {" "}
              SE PERDERÁN LOS PROGRESOS{" "}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setQuitInGameModalActive(false);
            setCountDownGame(timeGame);
            setStartCounter(false);
            setPointsTeamOne(0);
            setPointsTeamTwo(0);
            setTeamOneName("Team 1");
            setTeamTwoName("Team 2");
            setTeamOneColor("rgb(191, 39, 211)");
            setTeamTwoColor("rgb(36, 99, 235)");
            setAssignedTeamOne(true);
            setCurrentRound(1);
            setGameState("preGame");
          }}
          style={{
            alignSelf: "center",
            top: "50%",
            position: "absolute",
            justifyContent: "center",
          }}
        >
          <Text
            adjustsFontSizeToFit
            style={[
              {
                fontFamily: "LuckiestGuy",
                fontSize: 40,
                color: "white",
                backgroundColor: "#bf2c2c",
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 5,
              },
              deviceWidth > limitWidth ? { fontSize: 55 } : null,
            ]}
          >
            SÍ, SALIR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => setQuitInGameModalActive(false), 300);
            setQuitInGameActive(false);
            setStartCounter(true);
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
      </Animated.View>
    </View>
  );
}

export default QuitInGame;
