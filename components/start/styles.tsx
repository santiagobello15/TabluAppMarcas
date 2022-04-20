import { StyleSheet } from "react-native";
const mainColor = "#7b2cbf";

const CardColorRedTransp = "rgba(250, 199, 202, 0.7);";
const CardColorGreenTransp = "rgba(201, 228, 222, 0.702);";
const CardColorBlueTransp = "rgba(198, 221, 241, 0.7);";
const CardColorYellowTransp = "rgba(250, 237, 204, 0.7);";

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
    height: "50%",
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
    width: "20%",
    borderRadius: 4,
    aspectRatio: 1.45,
  },
  pickedRed: { backgroundColor: CardColorRedTransp, left: "4%" },
  pickedBlue: { backgroundColor: CardColorBlueTransp, left: "28%" },
  pickedGreen: { backgroundColor: CardColorGreenTransp, right: "28.01%" },
  pickedYellow: { backgroundColor: CardColorYellowTransp, right: "4%" },
  input: {
    width: "90%",
    top: "5%",
    fontFamily: "MuktaMalarBold",
    color: "black",
  },
  startGame: {
    backgroundColor: "#ffd100",
    position: "absolute",
    bottom: "7%",
    alignItems: "center",
  },

  closeBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
  },
  closeBtnTxt: {
    color: "white",
  },
});
