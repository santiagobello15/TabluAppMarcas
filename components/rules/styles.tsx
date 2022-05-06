import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

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
    aspectRatio: 0.75,
    maxWidth: 400,
    maxHeight: 500,
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
  ruleTxtOne: {
    position: "absolute",
    width: "90%",
    height: "20%",
    top: "10%",
  },
  ruleTxtTwo: {
    position: "absolute",
    width: "90%",
    height: "20%",
    top: "35%",
  },
  ruleTxtThree: {
    position: "absolute",
    width: "90%",
    height: "20%",
    top: "60%",
  },
  ruleTxtFour: {
    position: "absolute",
    width: "90%",
    height: "20%",
    top: "85%",
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
