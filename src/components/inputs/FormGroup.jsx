import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormGroup = (props) => {
  const {
    children,
    style = {}
  } = props;

  return (
    <View style={{ ...styles.formGroup, ...style }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  formGroup: {
    margin: 10
  }
})

export default FormGroup;