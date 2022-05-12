import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlayModal: {
    backgroundColor: "rgba(49, 49, 49, 0.96)",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  mainModal: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    width: "80%",
    aspectRatio: 0.75,
    maxWidth: 400,
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
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: "7%",
  },
});
