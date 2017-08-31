import React, {Component} from "react"
import {View} from "react-native"
import {Paragraph} from ".././"

export default class List extends Component {
  render() {
    return this.props.items === null
      ? null
      : <View>
        {this.props.items.map(item =>
          <Paragraph>
            • {item}
            </Paragraph>
          )}
        </View>
  }
}
