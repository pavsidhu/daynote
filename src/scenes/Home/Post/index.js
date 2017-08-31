import React, {Component} from "react"
import {ScrollView, Text} from "react-native"
import moment from "moment"
import {firebase} from "../../../utils"
import {Card, Heading, Paragraph} from "../../../components"
import styles from "./styles"

export default class Post extends Component {
  static navigationOptions = ({navigation}) => ({
    title: moment(navigation.state.params.date, "YYYY-MM-DD").format(
      "Do MMMM YYYY"
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

  componentWillMount() {
    this.getPost()
  }

  getPost() {
    const user = firebase.auth().currentUser
    const UsersRef = firebase.database().ref("users")

    UsersRef.child(user.uid)
      .child("posts")
      .on("value", snapshot => {
        const posts = snapshot.val()

        for (let post in posts) {
          if (
            posts[post].date.slice(0, 10) ===
            this.props.navigation.state.params.date
          ) {
            return this.setState(state => ({
              activities: posts[post].activities,
              fears: posts[post].fears,
              gratitude: posts[post].gratitude
            }))
          }
        }
      })
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Card>
          <Heading>Activities</Heading>
          <Paragraph>{this.state.activities}</Paragraph>
        </Card>

        <Card>
          <Heading>Fears</Heading>
          <Paragraph>{this.state.fears}</Paragraph>
        </Card>

        <Card styles={{marginBottom: 16}}>
          <Heading>Gratitude</Heading>
          <Paragraph>{this.state.gratitude}</Paragraph>
        </Card>
      </ScrollView>
    )
  }
}
