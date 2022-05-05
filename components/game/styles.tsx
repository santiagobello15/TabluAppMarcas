import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
  mainContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fafafa",
    position: "absolute",
    zIndex: 9999,
    top: "5%",
    width: "90%",
    height: "77%",
    maxWidth: 420,
  },
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: "12%",
  },
  btnConfig: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: "40%",
    aspectRatio: 2.5,
    position: "absolute",
    top: "35%",
    elevation: 10,
  },
  btnRules: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: "40%",
    aspectRatio: 2.5,
    position: "absolute",
    top: "50%",
    elevation: 10,
  },
  btnStart: {
    backgroundColor: mainColor,
    borderRadius: 5,
    width: "40%",
    aspectRatio: 2.5,
    position: "absolute",
    top: "65%",
    elevation: 10,
  },
  insideBtnTextView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  view1holder: {
    position: "absolute",
    width: "21.25%",
    aspectRatio: 0.7,
    left: "3%",
    bottom: "2.5%",
  },
  view1: {
    backgroundColor: "gray",
    position: "absolute",
    width: "100%",
    aspectRatio: 1,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  view1up: {
    position: "absolute",
    width: "100%",
    top: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view1txt: {
    color: "#2e2e2e",
    fontSize: 14,
  },
  view2holder: {
    position: "absolute",
    width: "21.25%",
    aspectRatio: 0.7,
    left: "27.25%",
    bottom: "2.5%",
  },
  view2: {
    backgroundColor: "gray",
    position: "absolute",
    width: "100%",
    aspectRatio: 1,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  view2up: {
    position: "absolute",
    width: "100%",
    top: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view2txt: {
    color: "#2e2e2e",
    fontSize: 14,
  },
  view3holder: {
    position: "absolute",
    width: "21.25%",
    aspectRatio: 0.7,
    right: "27.25%",
    bottom: "2.5%",
  },
  view3: {
    backgroundColor: "gray",
    position: "absolute",
    width: "100%",
    aspectRatio: 1,
    bottom: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3up: {
    position: "absolute",
    width: "100%",
    top: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3txt: {
    color: "#2e2e2e",
    fontSize: 14,
  },
  view4holder: {
    position: "absolute",
    width: "21.25%",
    aspectRatio: 0.7,
    right: "3%",
    bottom: "2.5%",
  },
  view4: {
    backgroundColor: "gray",
    position: "absolute",
    width: "100%",
    aspectRatio: 1,
    bottom: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view4up: {
    position: "absolute",
    width: "100%",
    top: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  view4txt: {
    color: "#2e2e2e",
    fontSize: 14,
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
    zIndex: 99999999999999999999999999999,
  },
  closeBtnTxt: {
    color: "white",
  },
  gamingPad: {
    position: "absolute",
    width: "100%",
    height: "45%",
    top: "15%",
  },
  gamingPadLeft: {
    position: "absolute",
    width: "20%",
    height: "100%",
    alignItems: "center",
    top: "0%",
  },
  gamingPadCenter: {
    position: "absolute",
    width: "60%",
    height: "100%",
    top: "0%",
    right: "20%",
    alignItems: "center",
  },
  gamingPadRight: {
    position: "absolute",
    width: "20%",
    height: "100%",
    top: "0%",
    right: 0,
  },
  gamingCounter: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: 1000,
    position: "absolute",
    top: "45%",
    backgroundColor: "#585858",
    justifyContent: "center",
    alignItems: "center",
  },
  pointBtn: {
    width: "90%",
    height: "20%",
    borderRadius: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999999999999999999,
  },
  cardView: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#585858",
    top: "10%",
    height: "85%",
  },
  cardName: { fontFamily: "MuktaMalarBold", fontSize: 20, color: "white" },
  cardWord: { fontFamily: "MuktaMalarBold", fontSize: 14, color: "white" },
  gamingPadFooter: {
    width: "100%",
    height: "20%",
    bottom: 0,
    position: "absolute",
  },
  turnToTeam: {
    width: "80%",
    height: "5%",
    bottom: "33.33%",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    width: "25%",
    height: "5%",
    bottom: "26%",
    position: "absolute",
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    zIndex: 99999,
    justifyContent: "center",
    backgroundColor: "#9e51dd",
  },
  restartBtn: {
    width: "25%",
    height: "5%",
    bottom: "19%",
    position: "absolute",
    borderRadius: 10,
    zIndex: 99999,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9e51dd",
  },
  teamsBadges: {
    width: "40%",
    height: "70%",
    bottom: "12%",
    position: "absolute",
    borderRadius: 15,
    elevation: 3,
    alignItems: "center",
  },
  clapBtn: {
    width: "40%",
    height: "10%",
    bottom: "15%",
    position: "absolute",
    borderRadius: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#a9a9ac",
  },
  twitterBtn: {
    position: "absolute",
    width: "12%",
    aspectRatio: 1,
    bottom: "2.5%",
    right: "5%",
  },
  facebookBtn: {
    position: "absolute",
    width: "12%",
    aspectRatio: 1,
    bottom: "2.5%",
    right: "20%",
  },
});
