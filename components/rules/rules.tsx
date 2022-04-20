import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

function RulesModal() {
  const { rulesModalActive, setRulesModalActive } = useContext<any>(Context);
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
            REGLAS
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.ruleTxtOne}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 9,
                color: "black",
              }}
            >
              1) Un miembro del equipo {'"A"'} lee una carta, y tratará que sólo
              su equipo adivine el nombre de la persona sin decir las palabras
              prohibidas
            </Text>
          </View>
          <View style={styles.ruleTxtTwo}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 9,
                color: "black",
              }}
            >
              2) Cada acierto suma un punto. Se pueden pasar cartas, y ante un
              error, se pasa a la carta siguiente.
            </Text>
          </View>
          <View style={styles.ruleTxtThree}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 9,
                color: "black",
              }}
            >
              3) Si se opta jugar con incrementos de dificultad (insultos,
              muletillas), cada incumplimiento resta un punto.
            </Text>
          </View>
          <View style={styles.ruleTxtFour}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontFamily: "MuktaMalar",
                fontSize: 9,
                color: "black",
              }}
            >
              4) Prohibido gritar
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setRulesModalActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RulesModal;
