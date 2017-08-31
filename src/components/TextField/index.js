import React, {Component} from "react"
import {TextInput} from "react-native"
import {colors} from "../../utils"
import styles from "./styles"

export default class TextField extends Component {
  constructor() {
    super()

    this.state = {
      height: null
    }
  }

  onContentSizeChange(height) {
    this.setState(state => ({
      height: height
    }))
  }

  render() {
    return (
      <TextInput
        multiline={true}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
        onContentSizeChange={event =>
          this.onContentSizeChange(event.nativeEvent.contentSize.height)}
        selectionColor={colors.main}
        underlineColorAndroid={colors.dark}
        style={[styles.textField, {height: this.state.height}]}
      />
    )
  }
}
