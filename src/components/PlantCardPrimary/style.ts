import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 10,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }
});

export default styles;
