import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ConfigModal() {
  return (
    <View style={styles.mainModal}>
      <Text>HOLAAAAA</Text>
      <TouchableOpacity style={styles.closeBtn}>
        <Text style={styles.closeBtnTxt}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
