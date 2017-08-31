import React, {Component} from "react"
import {StackNavigator} from "react-navigation"
import {colors} from "../../utils"
import LogIn from "./LogIn"
import Privacy from "./Privacy"
import Terms from "./Terms"

const Welcome = StackNavigator(
  {
    LogIn: {screen: LogIn},
    Privacy: {screen: Privacy},
    Terms: {screen: Terms}
  },
  {
    navigationOptions: {
      headerTintColor: colors.light,
      headerStyle: {
        backgroundColor: colors.main
      },
      headerTitleStyle: {
        color: colors.light
      }
    }
  }
)

export default Welcome
