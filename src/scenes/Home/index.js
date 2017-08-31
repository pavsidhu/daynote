import React, {Component} from "react"
import {View, Image} from "react-native"
import {StackNavigator} from "react-navigation"
import {Icon} from "../../components"
import {colors} from "../../utils"
import Calendar from "./Calendar"
import Post from "./Post"
import AddPost from "./AddPost"
import Settings from "./Settings"

const Home = StackNavigator(
  {
    Calendar: {screen: Calendar},
    Post: {screen: Post},
    AddPost: {screen: AddPost},
    Settings: {screen: Settings}
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        headerTintColor: colors.light,
        headerStyle: {
          backgroundColor: colors.main
        },
        headerTitleStyle: {
          color: colors.light
        }
      }
    }
  }
)

export default Home
