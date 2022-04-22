import { styles } from "./styles";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import CheckBox from "expo-checkbox";
import { Context } from "../../context/AppContext";
import { useContext } from "react";
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
  } = useContext<any>(Context);

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
            CONFIGURACIÓN
          </Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.roundsTitle}>
            <Text
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 15,
                color: "black",
              }}
            >
              Cantidad de rondas
            </Text>
          </View>
          <Slider
            style={[{ width: 200, height: 40 }, styles.sliderViewRound]}
            minimumValue={4}
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
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 20,
                color: "black",
              }}
            >
              {roundsGame}
            </Text>
          </View>
          <View style={styles.timeTitle}>
            <Text
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 15,
                color: "black",
              }}
            >
              Tiempo por ronda
            </Text>
          </View>
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
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 20,
                color: "black",
              }}
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
            <Text style={styles.checkboxContainerMuletillasTxt}>
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
            <Text style={styles.checkboxContainerInsultosTxt}>
              Sin Insultos
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setConfigModalActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConfigModal;
