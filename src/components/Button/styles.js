import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  button: {
    width: 320,
    height: 56,
    padding: 16,
    borderRadius: 2,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row"
  },

  text: {
    fontSize: 14,
    fontWeight: "bold"
  },

  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 16
  }
})

export default styles
