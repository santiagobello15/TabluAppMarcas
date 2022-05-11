import { StyleSheet } from "react-native";

const mainColor = "#ff6d00";

export const styles = StyleSheet.create({
  overlayModal: {
    backgroundColor: "rgba(49, 49, 49, 0.945)",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999999,
  },
  mainModal: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    width: "80%",
    maxWidth: 400,
    aspectRatio: 0.75,
    maxHeight: 450,
  },
  mainModalBig: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    width: "80%",
    aspectRatio: 0.75,
    maxWidth: 500,
    maxHeight: 562,
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
    top: "20%",
    width: "90%",
    height: "15%",
  },
  closeBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    width: "12%",
    aspectRatio: 1,
  },
  closeBtnTxt: {
    color: "white",
  },
});
