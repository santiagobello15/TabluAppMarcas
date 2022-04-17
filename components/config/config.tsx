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

function ConfigModal() {
  const { configModalActive, setConfigModalActive } = useContext<any>(Context);
  return (
    <View style={styles.mainModal}>
      <Text>HOLAAAAA</Text>
      <TouchableOpacity
        onPress={() => {
          setConfigModalActive(false);
        }}
        style={styles.closeBtn}
      >
        <Text style={styles.closeBtnTxt}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ConfigModal;
