import { styles } from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Animated,
  useWindowDimensions,
} from "react-native";
import { Context } from "../../context/AppContext";
import { useContext, useRef } from "react";

function StartModal() {
  const {
    setStartModalActive,
    setTeamOneName,
    setTeamTwoName,
    teamOneColor,
    setTeamOneColor,
    teamTwoColor,
    setTeamTwoColor,
    setGameState,
    startActive,
    setStartActive,
    limitWidth,
    deviceWidth,
  } = useContext<any>(Context);

  const CardColorRed = "rgb(191, 39, 211)";
  const CardColorGreen = "rgb(33, 196, 93)";
  const CardColorBlue = "rgb(36, 99, 235)";
  const CardColorYellow = "rgb(252, 212, 79)";

  const modalValue = useRef(new Animated.Value(0)).current;

  const modalAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (startActive == true) {
      Animated.timing(modalValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
    if (startActive == false) {
      Animated.timing(modalValue, {
        toValue: 0,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
  };

  modalAnimation();
  const windowHeight = useWindowDimensions().height;
  return (
    <View
      style={[styles.overlayModal, { minHeight: Math.round(windowHeight) }]}
    >
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
          <Text
            style={[
              {
                fontFamily: "LuckiestGuy",
                fontSize: 28,
                color: "white",
                backgroundColor: "#ff6d00",
              },
              deviceWidth > limitWidth ? { fontSize: 40 } : null,
            ]}
          >
            {" "}
            COMENZAR{" "}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={[styles.teamOneView, { backgroundColor: teamOneColor }]}>
            <TextInput
              textAlign={"center"}
              maxLength={15}
              placeholderTextColor="#eeeeeede"
              style={[
                styles.input,
                deviceWidth > limitWidth ? { fontSize: 22 } : null,
              ]}
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
              maxLength={15}
              textAlign={"center"}
              placeholderTextColor="#eeeeeede"
              style={[
                styles.input,
                deviceWidth > limitWidth ? { fontSize: 22 } : null,
              ]}
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
              setGameState("inGame");
              setStartModalActive(false);
            }}
          >
            <Text
              style={[
                {
                  fontFamily: "LuckiestGuy",
                  fontSize: 20,
                  color: "white",
                  textShadowColor: "black",
                  textShadowRadius: 1,
                  textShadowOffset: { width: 1.2, height: 1 },
                  paddingLeft: 5,
                  paddingRight: 5,
                },
                deviceWidth > limitWidth ? { fontSize: 30 } : null,
              ]}
            >
              JUGAR
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => setStartModalActive(false), 300);
            setStartActive(false);
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

export default StartModal;
