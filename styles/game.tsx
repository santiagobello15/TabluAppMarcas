import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontFamily: "LuckiestGuy_400Regular", fontSize: 30 },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  btn: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: 150,
    height: 60,
  },
});
