import {Dimensions} from "react-native"
import {colors} from "../../../utils"

const styles = {
  calendar: {
    todayTextColor: colors.main,
    dotColor: "#9CCC65"
  },

  markedDate: [
    {startingDay: true, color: "#9CCC65", textColor: "white"},
    {endingDay: true, color: "#9CCC65", textColor: "white"}
  ]
}

export default styles

// calendarContainer: {
//   backgroundColor: null
// },
// calendarHeading: {
//   borderTopWidth: 0,
//   borderBottomWidth: 0,
//   marginTop: 16
// },
// calendarControls: {
//   display: "none"
// },
// controlButtonText: {
//   fontSize: 16,
//   marginTop: 0,
//   lineHeight: 32
// },
// dayHeading: {
//   color: "#9E9E9E",
//   fontSize: 16
// },
// weekendHeading: {
//   color: "#9E9E9E",
//   fontSize: 16
// },
// weekRow: {
//   borderBottomColor: "red",
//   borderTopColor: "red"
// },
// dayButton: {
//   borderTopWidth: 0,
//   height: (Dimensions.get("window").height - 312) / 5,
//   justifyContent: "center"
// },
// dayCircleFiller: {
//   backgroundColor: "rgba(255, 255, 255, 0.7)",
//   width: 40,
//   height: 40,
//   borderRadius: 20
// },
// eventIndicator: {
//   opacity: 0
// },
// hasEventCircle: {
//   backgroundColor: "#9CCC65"
// },
// hasEventText: {
//   color: "white"
// },
// currentDayCircle: {
//   backgroundColor: colors.main
// },
// day: {
//   color: "#616161"
// },
// weekendDayText: {
//   color: "#616161"
// },
// currentDayText: {
//   color: colors.main,
//   fontWeight: "bold"
// },
// weekendDayButton: {
//   backgroundColor: null
// },
// selectedDayCircle: {
//   backgroundColor: colors.main
// }
