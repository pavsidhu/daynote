import React, {Component} from "react"
import {View, Image, Text, TouchableOpacity} from "react-native"
import styles from "./styles"

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={[styles.button, {backgroundColor: this.props.backgroundColor}]}
        >
          <Image source={this.props.icon} style={styles.icon} />
          <Text
            style={[
              styles.text,
              {
                color: this.props.color,
                marginLeft: this.props.icon ? 40 : null
              }
            ]}
          >
            {this.props.text.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
