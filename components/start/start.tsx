import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

function StartModal() {
  const { startModalActive, setStartModalActive } = useContext<any>(Context);
  return (
    <View style={styles.overlayModal}>
      <View style={styles.mainModal}>
        <Text>START</Text>
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
