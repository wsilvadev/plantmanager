import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
    marginTop: getStatusBarHeight(),
    justifyContent: "space-between",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 44,
  },
  greeting: {
    fontSize: 40,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 40,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 50
  },
});

export default styles;
