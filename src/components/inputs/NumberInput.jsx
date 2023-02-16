import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';

const NumberInput = (props) => {
  const {
    value: initialValue,
  } = props;

  const [currentValue, setCurrentValue] = useState(initialValue)

  const parseToNumber = (text) => {
    const number = text ? parseInt(text) : ''

    if (isNaN(number) && text) return
    setCurrentValue(number)
  }

  return (
    <TextInput
      { ...props }
      value={currentValue}
      onChangeText={parseToNumber}
    />
  )
}

export default NumberInput;