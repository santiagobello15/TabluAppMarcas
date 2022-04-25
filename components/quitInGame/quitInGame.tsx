import { styles } from "./styles";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

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
  } = useContext<any>(Context);

  return (
    <View style={styles.overlayModal}>
      <View style={styles.mainModal}>
        <ImageBackground
          source={require("./media/patternpad.png")}
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
              backgroundColor: "#7b2cbf",
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
              }}
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
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
                backgroundColor: "#b97af0",
              }}
            >
              SE PERDERÁN LOS PROGRESOS
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
            setTeamOneColor("rgb(249, 200, 203)");
            setTeamTwoColor("rgb(198, 221, 241)");
            setAssignedTeamOne(true);
            setCurrentRound(1);
            setGameState("preGame");
          }}
          style={{ alignSelf: "center", top: "50%", position: "absolute" }}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              fontFamily: "LuckiestGuy",
              fontSize: 40,
              color: "white",
              backgroundColor: "#bf2c2c",
            }}
          >
            SÍ, SALIR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setQuitInGameModalActive(false);
            setStartCounter(true);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default QuitInGame;
