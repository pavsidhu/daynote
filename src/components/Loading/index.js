import React, {Component} from "react"
import {View, ActivityIndicator} from "react-native"
import styles from "./styles"

export default class Loading extends Component {
  render() {
    return this.props.show
      ? <View style={styles.container}>
        <ActivityIndicator color="#FF5722" size={64} />
        </View>
      : null
  }
}
