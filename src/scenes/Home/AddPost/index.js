import React, {Component} from "react"
import {ScrollView, TextInput, Keyboard, Alert} from "react-native"
import moment from "moment"
import {firebase, colors} from "../../../utils"
import {Icon, Card, Heading, TextField} from "../../../components"

export default class AddPost extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Add Today's Entry",
    headerRight: (
      <Icon
        source={require("./done.png")}
        onPress={() => {
          navigation.state.params.savePost()
        }}
        style={{marginRight: 16}}
      />
    )
  })

  constructor() {
    super()

    this.state = {
      activities: null,
      fears: null,
      gratitude: null
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      savePost: this.savePost.bind(this)
    })
  }

  savePost() {
    Keyboard.dismiss()

    const user = firebase.auth().currentUser
    const UsersRef = firebase.database().ref("users")

    UsersRef.child(user.uid)
      .child("posts")
      .push({
        date: new Date(),
        activities: this.state.activities,
        fears: this.state.fears,
        gratitude: this.state.gratitude
      })

    const currentHour = moment().format("HH")

    Alert.alert(
      "Your entry has been added",
      currentHour >= 17
        ? "Have a nice evening 😄"
        : currentHour >= 12
          ? "Have a great afternoon 😄"
          : "Have a great day 😎",
      [
        {
          text: "Okay",
          onPress: () => {
            this.props.navigation.goBack()
          }
        }
      ],
      {cancelable: false}
    )
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Card>
          <Heading>🤔 Activities</Heading>
          <TextField
            placeholder={"What happened today?"}
            onChangeText={text =>
              this.setState(state => ({
                activities: text
              }))}
          />
        </Card>

        <Card>
          <Heading>😨 Fears</Heading>
          <TextField
            placeholder={"Did you fear anything?"}
            onChangeText={text =>
              this.setState(state => ({
                fears: text
              }))}
          />
        </Card>

        <Card style={{marginBottom: 4}}>
          <Heading>🙏🏼 Gratitude</Heading>
          <TextField
            placeholder={"What are you grateful for?"}
            onChangeText={text =>
              this.setState(state => ({
                gratitude: text
              }))}
          />
        </Card>
      </ScrollView>
    )
  }
}
