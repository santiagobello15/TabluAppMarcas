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
        <Text>RULES</Text>
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
