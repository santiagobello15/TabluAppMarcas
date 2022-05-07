import { styles } from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Context } from "../../context/AppContext";
import { useContext, useRef } from "react";
import Slider from "@react-native-community/slider";

function ConfigModal() {
  const {
    configModalActive,
    setConfigModalActive,
    roundsGame,
    setRoundsGame,
    timeGame,
    setTimeGame,
    isCheckedMuletillas,
    setCheckedMuletillas,
    isCheckedInsultos,
    setCheckedInsultos,
    configActive,
    setConfigActive,
    limitWidth,
    deviceWidth,
  } = useContext<any>(Context);

  const modalValue = useRef(new Animated.Value(0)).current;

  const modalAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (configActive == true) {
      Animated.timing(modalValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
    if (configActive == false) {
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
          source={require("./media/patternpad.png")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              {
                fontFamily: "LuckiestGuy",
                fontSize: 28,
                color: "white",
                backgroundColor: "#7b2cbf",
              },
              deviceWidth > limitWidth ? { fontSize: 40 } : null,
            ]}
          >
            {" "}
            CONFIGURACIÓN{" "}
          </Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.roundsTitle}>
            <Text
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 15,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 22 } : null,
              ]}
            >
              Cantidad de rondas
            </Text>
          </View>
          {/*
 // @ts-ignore */}
          <Slider
            style={[{ width: 200, height: 40 }, styles.sliderViewRound]}
            minimumValue={1}
            maximumValue={25}
            minimumTrackTintColor="#8b6ad8"
            maximumTrackTintColor="#000000"
            thumbTintColor="gray"
            step={5}
            onValueChange={setRoundsGame}
            value={roundsGame}
          />
          <View style={styles.roundsCounter}>
            <Text
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 20,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
            >
              {roundsGame}
            </Text>
          </View>
          <View style={styles.timeTitle}>
            <Text
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 15,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 22 } : null,
              ]}
            >
              Tiempo por ronda
            </Text>
          </View>
          {/*
 // @ts-ignore */}
          <Slider
            style={[{ width: 200, height: 40 }, styles.sliderViewTime]}
            minimumValue={5}
            maximumValue={90}
            minimumTrackTintColor="#8b6ad8"
            maximumTrackTintColor="#000000"
            thumbTintColor="gray"
            step={15}
            onValueChange={setTimeGame}
            value={timeGame}
          />
          <View style={styles.timeCounter}>
            <Text
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 20,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 25 } : null,
              ]}
            >
              {timeGame}
            </Text>
          </View>
          <View style={styles.checkboxContainerMuletillas}>
            <CheckBox
              style={styles.checkboxitself}
              value={isCheckedMuletillas}
              onValueChange={setCheckedMuletillas}
              color={isCheckedMuletillas ? "#8b6ad8" : undefined}
            />
            <Text
              style={[
                styles.checkboxContainerMuletillasTxt,
                deviceWidth > limitWidth ? { fontSize: 20 } : null,
              ]}
            >
              Sin Muletillas
            </Text>
          </View>
          <View style={styles.checkboxContainerInsultos}>
            <CheckBox
              style={styles.checkboxitself}
              value={isCheckedInsultos}
              onValueChange={setCheckedInsultos}
              color={isCheckedInsultos ? "#8b6ad8" : undefined}
            />
            <Text
              style={[
                styles.checkboxContainerInsultosTxt,
                deviceWidth > limitWidth ? { fontSize: 20 } : null,
              ]}
            >
              Sin Insultos
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => setConfigModalActive(false), 300);
            setConfigActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default ConfigModal;
