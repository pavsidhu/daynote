import React, {Component} from "react"
import {Image, TouchableOpacity} from "react-native"

export default class Icon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={this.props.source}
          style={[{width: 24, height: 24, padding: 8}, this.props.style]}
        />
      </TouchableOpacity>
    )
  }
}
