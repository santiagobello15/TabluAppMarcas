import { StyleSheet } from "react-native";
const mainColor = "#7b2cbf";

const CardColorRedTransp = "rgba(191, 39, 211, 0.5)";
const CardColorGreenTransp = "rgba(33, 196, 93, 0.5)";
const CardColorBlueTransp = "rgba(36, 99, 235, 0.5)";
const CardColorYellowTransp = "rgba(252, 212, 79, 0.5)";

export const styles = StyleSheet.create({
  overlayModal: {
    backgroundColor: "rgba(49, 49, 49, 0.945)",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
  },
  mainModal: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    width: "80%",
    maxWidth: 400,
    maxHeight: 500,
    aspectRatio: 0.75,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: "7%",
  },
  subContainer: {
    alignItems: "center",
    width: "70%",
    position: "absolute",
    height: "60%",
    backgroundColor: "#fafafa",
    top: "30%",
    borderRadius: 10,
    borderColor: mainColor,
    borderWidth: 1,
  },
  teamOneView: {
    position: "absolute",
    width: "80%",
    borderRadius: 10,
    height: "30%",
    top: "7%",
    alignItems: "center",
    elevation: 3,
  },
  teamTwoView: {
    position: "absolute",
    width: "80%",
    height: "30%",
    borderRadius: 10,
    top: "44%",
    alignItems: "center",
    elevation: 3,
  },
  colorsContainer: {
    width: "70%",
    height: "30%",
    position: "absolute",
    backgroundColor: "#282222",
    borderRadius: 5,
    bottom: "12.5%",
    right: "6%",
    justifyContent: "center",
  },
  colorBoxes: {
    position: "absolute",
    height: "70%",
    width: "20%",
    borderRadius: 4,
  },
  pickedRed: { backgroundColor: CardColorRedTransp, left: "4%" },
  pickedBlue: { backgroundColor: CardColorBlueTransp, left: "28%" },
  pickedGreen: { backgroundColor: CardColorGreenTransp, right: "28.01%" },
  pickedYellow: { backgroundColor: CardColorYellowTransp, right: "4%" },
  input: {
    width: "90%",
    top: "5%",
    fontFamily: "MuktaMalarBold",
    color: "white",
  },
  startGame: {
    backgroundColor: mainColor,
    position: "absolute",
    bottom: "7%",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3,
  },

  closeBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    width: "10%",
    aspectRatio: 1,
  },
  closeBtnTxt: {
    color: "white",
  },
});
