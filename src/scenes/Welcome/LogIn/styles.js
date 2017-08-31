import {StyleSheet} from "react-native"
import {colors} from "../../../utils"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 2
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    width: "70%",
    height: 100,
    alignSelf: "center"
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: 16,
    width: 320
  },
  legalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 320,
    marginTop: 16
  },
  legal: {
    fontSize: 14
  },
  link: {
    color: colors.main
  }
})

export default styles
