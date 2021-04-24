import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from '../../styles/fonts'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  subtitle: {
    textAlign: "center",
    fontSize: 25,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 66,
    width: 66,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
    opacity: 0.8,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.4
  },
  
});
export default styles;
