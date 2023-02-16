import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';
import { TouchableWithoutFeedback, View } from 'react-native';

const DateTimeInput = (props) => {
  const {
    mode,
    label
  } = props;

  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const onChange = (_event, selectedDate) => {
    setDate(selectedDate);
    closeModal()
  };

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  const inputValueWithFormat = () => {
    if (mode === 'date') return date.toLocaleDateString();
    if (mode === 'time') return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={openModal}>
        <View>
          <TextInput
            label={label || 'Select a date'}
            value={inputValueWithFormat()}
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
      {
        visible &&
        <DateTimePicker
          onBlur={closeModal}
          mode={mode}
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      }
    </View>
  );
};

export default DateTimeInput;