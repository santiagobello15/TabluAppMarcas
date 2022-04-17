import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

export const styles = StyleSheet.create({
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
