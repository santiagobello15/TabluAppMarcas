import { styles } from "./styles";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Context } from "../../context/AppContext";
import { useContext, useRef } from "react";

function RulesModal() {
  const {
    rulesModalActive,
    setRulesModalActive,
    rulesActive,
    setRulesActive,
    limitWidth,
    deviceWidth,
  } = useContext<any>(Context);

  const modalValue = useRef(new Animated.Value(0)).current;

  const modalAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    if (rulesActive == true) {
      Animated.timing(modalValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
      }).start();
    }
    if (rulesActive == false) {
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
            REGLAS{" "}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.ruleTxtOne}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 9,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 12 } : null,
              ]}
            >
              1) Un miembro del equipo {'"A"'} lee una carta, y tratará que sólo
              su equipo adivine el nombre de la persona sin decir las palabras
              prohibidas
            </Text>
          </View>
          <View style={styles.ruleTxtTwo}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 9,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 12 } : null,
              ]}
            >
              2) Cada acierto suma un punto. Se pueden pasar cartas, y ante un
              error, se pasa a la carta siguiente.
            </Text>
          </View>
          <View style={styles.ruleTxtThree}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 9,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 12 } : null,
              ]}
            >
              3) Si se opta jugar con incrementos de dificultad (insultos,
              muletillas), cada incumplimiento resta un punto.
            </Text>
          </View>
          <View style={styles.ruleTxtFour}>
            <Text
              adjustsFontSizeToFit
              style={[
                {
                  fontFamily: "MuktaMalar",
                  fontSize: 9,
                  color: "black",
                },
                deviceWidth > limitWidth ? { fontSize: 12 } : null,
              ]}
            >
              4) No se permiten mímicas, ni usar otro idioma para decir una
              palabra restringida
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => setRulesModalActive(false), 300);
            setRulesActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default RulesModal;
