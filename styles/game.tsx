import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: { backgroundColor: mainColor, position: "absolute", top: 80 },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  btnConfig: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: 150,
    height: 60,
    position: "absolute",
    top: 300,
  },
  btnRules: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: 150,
    height: 60,
    position: "absolute",
    top: 400,
  },
  btnStart: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: 150,
    height: 60,
    position: "absolute",
    top: 500,
  },
  insideBtnText: {
    color: "white",

    fontSize: 15,
  },
  insideBtnTextView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
