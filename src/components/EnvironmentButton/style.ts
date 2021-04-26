import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    height: 40,
    width: 90,
    marginHorizontal: 10
  },
  containerActive: {
    fontFamily: fonts.heading,
    color: colors.green,
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

export default styles;
