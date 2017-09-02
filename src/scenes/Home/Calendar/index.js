import React, {Component} from "react"
import {View, Alert} from "react-native"
import moment from "moment"
import ActionButton from "react-native-action-button"
import {Scene, Icon} from "../../../components"
import {firebase, colors} from "../../../utils"
import {CalendarList} from "react-native-calendars"
import styles from "./styles"

export default class Posts extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Your Entries",
    headerRight: (
      <Icon
        source={require("./settings.png")}
        onPress={() => navigation.navigate("Settings")}
        style={{marginRight: 16}}
      />
    )
  })

  constructor(props) {
    super(props)

    this.monthNames = [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    this.state = {
      markedDates: {}
    }
  }

  componentDidMount() {
    const months = [{dateString: moment().format("YYYY-MM-DD")}]

    this.onMonthChange(months)
  }

  onMonthChange(dates) {
    if (
      dates.filter(
        date => moment(date.dateString, "YYYY-MM-DD").diff(moment()) < 0
      ).length === 0
    )
      return

    const user = firebase.auth().currentUser
    const UsersRef = firebase.database().ref("users")

    UsersRef.child(user.uid)
      .child("posts")
      .on("value", snapshot => {
        const posts = snapshot.val()

        for (let post in posts) {
          const month = posts[post].date.slice(5, 7)
          if (dates.filter(date => date.month === month)) {
            const date = posts[post].date.slice(0, 10)

            this.setState(state => ({
              markedDates: Object.assign(
                {[date]: styles.markedDate},
                state.markedDates
              )
            }))
          }
        }
      })
  }

  onDaySelect(day) {
    if (moment(day.dateString, "YYYY-MM-DD").diff(moment()) > 0) {
      return Alert.alert(
        "That date is in the future",
        "Unless you're a time traveller, you'll have to wait.",
        [
          {
            text: "Okay",
            onPress: () => null
          }
        ],
        {cancelable: false}
      )
    }

    this.props.navigation.navigate("Post", {date: day.dateString})
  }

  render() {
    return (
      <Scene>
        <CalendarList
          onVisibleMonthsChange={dates => this.onMonthChange(dates)}
          markedDates={this.state.markedDates}
          markingType={"interactive"}
          onDayPress={day => this.onDaySelect(day)}
          maxDate={Date.now()}
          theme={styles.calendar}
        />
        <ActionButton
          buttonColor={colors.main}
          onPress={() => this.props.navigation.navigate("AddPost")}
        />
      </Scene>
    )
  }
}
