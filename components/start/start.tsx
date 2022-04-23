import { styles } from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

function StartModal() {
  const {
    startModalActive,
    setStartModalActive,
    teamOneName,
    setTeamOneName,
    teamTwoName,
    setTeamTwoName,
    teamOneColor,
    setTeamOneColor,
    teamTwoColor,
    setTeamTwoColor,
    gameState,
    setGameState,
    cardsDB,
  } = useContext<any>(Context);

  const CardColorRed = "rgb(249, 200, 203)";
  const CardColorGreen = "rgb(201, 228, 222)";
  const CardColorBlue = "rgb(198, 221, 241)";
  const CardColorYellow = "rgb(250, 237, 204)";

  const checkGameReady = () => {
    if (cardsDB !== undefined) {
      setGameState("inGame");
      setStartModalActive(false);
    }
  };

  return (
    <View style={styles.overlayModal}>
      <View style={styles.mainModal}>
        <ImageBackground
          source={require("./media/patternpad.png")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontFamily: "LuckiestGuy",
              fontSize: 28,
              color: "white",
              backgroundColor: "#7b2cbf",
            }}
          >
            COMENZAR
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={[styles.teamOneView, { backgroundColor: teamOneColor }]}>
            <TextInput
              textAlign={"center"}
              style={styles.input}
              onChangeText={setTeamOneName}
              placeholder="Team 1..."
            />
            <View style={styles.colorsContainer}>
              <TouchableOpacity
                style={[styles.pickedRed, styles.colorBoxes]}
                onPress={() => {
                  setTeamOneColor(CardColorRed);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedBlue, styles.colorBoxes]}
                onPress={() => {
                  setTeamOneColor(CardColorBlue);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedGreen, styles.colorBoxes]}
                onPress={() => {
                  setTeamOneColor(CardColorGreen);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedYellow, styles.colorBoxes]}
                onPress={() => {
                  setTeamOneColor(CardColorYellow);
                }}
              ></TouchableOpacity>
            </View>
          </View>
          <View style={[styles.teamTwoView, { backgroundColor: teamTwoColor }]}>
            <TextInput
              textAlign={"center"}
              style={styles.input}
              onChangeText={setTeamTwoName}
              placeholder="Team 2..."
            />
            <View style={styles.colorsContainer}>
              <TouchableOpacity
                style={[styles.pickedRed, styles.colorBoxes]}
                onPress={() => {
                  setTeamTwoColor(CardColorRed);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedBlue, styles.colorBoxes]}
                onPress={() => {
                  setTeamTwoColor(CardColorBlue);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedGreen, styles.colorBoxes]}
                onPress={() => {
                  setTeamTwoColor(CardColorGreen);
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.pickedYellow, styles.colorBoxes]}
                onPress={() => {
                  setTeamTwoColor(CardColorYellow);
                }}
              ></TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.startGame}
            onPress={() => {
              checkGameReady();
            }}
          >
            <Text
              style={{
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
                textShadowColor: "black",
                textShadowRadius: 1,
                textShadowOffset: { width: 1.2, height: 1 },
              }}
            >
              JUGAR
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setStartModalActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StartModal;
