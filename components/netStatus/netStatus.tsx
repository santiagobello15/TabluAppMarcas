import { styles } from "./styles";
import { Text, View } from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

export default function NetStatus() {
  const { limitWidth, deviceWidth } = useContext<any>(Context);
  return (
    <View style={styles.overlayModal}>
      <View style={styles.mainModal}>
        <View style={styles.titleContainer}>
          <Text
            style={[
              {
                fontFamily: "LuckiestGuy",
                fontSize: 35,
                color: "white",
                backgroundColor: "#bf2c2c",
              },
              deviceWidth > limitWidth ? { fontSize: 50 } : null,
            ]}
          >
            {" "}
            SIN CONEXIÓN{" "}
          </Text>
          <Text
            style={[
              {
                fontFamily: "LuckiestGuy",
                fontSize: 20,
                color: "white",
                backgroundColor: "#bf2c2c", top: "45%"              },
              deviceWidth > limitWidth ? { fontSize: 25 } : null,
            ]}
          >
            {" "}
            Conectá tu WIFI o datos{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}
