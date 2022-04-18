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
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 230,
    width: "80%",
    height: "50%",
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
