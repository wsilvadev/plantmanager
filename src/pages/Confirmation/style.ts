import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  emoji: {
    fontSize: 90,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
    lineHeight: 38,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 75,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 40,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
});

export default styles;
