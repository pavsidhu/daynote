import React, {Component} from "react"
import codePush from "react-native-code-push"
import SplashScreen from "react-native-splash-screen"
import {firebase} from "./utils"
import Home from "./scenes/Home"
import Welcome from "./scenes/Welcome"

class App extends Component {
  constructor() {
    super()

    this.state = {
      view: null
    }

    this.unsubscribe = null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user =>
      this.setState(state => ({
        view: user ? <Home /> : <Welcome />
      }))
    )

    SplashScreen.hide()
  }

  render() {
    return this.state.view
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

export default codePush(codePushOptions)(App)
