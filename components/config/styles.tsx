import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

export const styles = StyleSheet.create({
  mainModal: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 230,
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
    top: 35,
  },
  subContainer: {
    justifyContent: "center",
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
  roundsTitle: { top: 25, position: "absolute" },
  sliderViewRound: { top: 40, position: "absolute" },
  roundsCounter: { top: 70, position: "absolute" },
  timeTitle: { top: 110, position: "absolute" },
  sliderViewTime: { top: 125, position: "absolute" },
  timeCounter: { top: 155, position: "absolute" },
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
  overlayModal: {
    backgroundColor: "rgba(49, 49, 49, 0.945)",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
  },
});
