import React, {Component} from "react"
import {View, Image, Alert, Text, TouchableOpacity} from "react-native"
import SplashScreen from "react-native-splash-screen"
import {GoogleSignin} from "react-native-google-signin"
import {firebase} from "../../../utils"
import {Button, Loading, Paragraph} from "../../../components"
import styles from "./styles"

export default class LogIn extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      isLoggingIn: false
    }
  }

  componentDidMount() {
    this.setupGoogleSignin()

    SplashScreen.hide()
  }

  setupGoogleSignin() {
    GoogleSignin.hasPlayServices({autoResolve: true})
    GoogleSignin.configure({
      webClientId:
        "241356765374-ljg1m8hmiuu8plg2jpn6n5lhgs7otltk.apps.googleusercontent.com"
    })
  }

  async logIn() {
    this.setState(state => ({isLoggingIn: true}))

    try {
      const user = await GoogleSignin.signIn()
      const credential = firebase.auth.GoogleAuthProvider.credential(
        user.idToken
      )

      firebase.auth().signInWithCredential(credential)
    } catch (error) {
      this.setState(state => ({isLoggingIn: false}))

      Alert.alert(
        "Connection Error ☹️",
        "Please check your internet connection and try again",
        [
          {
            text: "Okay",
            onPress: () => null
          }
        ],
        {cancelable: false}
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading show={this.state.isLoggingIn} />
        <View style={styles.logoContainer}>
          <Image
            source={require("./logo.png")}
            style={styles.logo}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.contentContainer}>
          <Paragraph style={styles.welcomeText}>
            Welcome to DayNote 🎉 please connect your Google account to get
            started
          </Paragraph>
          <Button
            backgroundColor="white"
            color="black"
            icon={require("./google-logo.png")}
            text="Continue With Google"
            onPress={() => this.logIn()}
          />

          <View style={styles.legalContainer}>
            <Text style={styles.legal}>By signing up, you agree to the </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Terms")}
            >
              <Text style={[styles.legal, styles.link]}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.legal}> and </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Privacy")}
            >
              <Text style={[styles.legal, styles.link]}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
