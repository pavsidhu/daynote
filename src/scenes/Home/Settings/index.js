import React, {Component} from "react"
import {View, TouchableOpacity, Linking} from "react-native"
import {firebase, colors} from "../../../utils"
import {Button, Paragraph} from "../../../components"
import packageJson from "../../../../package.json"

class Settings extends Component {
  static navigationOptions = {
    title: "Settings"
  }

  signOut() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Button
          text="Sign Out"
          onPress={() => this.signOut()}
          backgroundColor="#BDBDBD"
        />

        <Paragraph>Version {packageJson.version}</Paragraph>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://pavsidhu.com")}
        >
          <Paragraph style={{color: colors.main}}>
            🏗️ Built by Pav Sidhu
          </Paragraph>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Settings
