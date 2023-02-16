import React, { useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import SelectInput from '../../../components/inputs/SelectInput';
import FormGroup from '../../../components/inputs/FormGroup';
import NumberInput from '../../../components/inputs/NumberInput';
import DateTimeInput from '../../../components/inputs/DateTimeInput';
import AppModal from '../../../components/AppModal';

const initialState = {
  amount: '',
  description: '',
  category: [],
  account: [],
  labels: [],
}

const RecordForm = (props) => {
  const [formControls, setFormControls] = React.useState(initialState);

  const {
    visible,
    onHide,
    selectedRecord
  } = props;

  useEffect(() => {
    if (selectedRecord) {
      setFormControls(selectedRecord)
      return
    }

    setFormControls(initialState)
  }, [visible])

  const onChangeText = (key, text) => setFormControls({ ...formControls, ...{ [key]: text } })

  return (
    <AppModal visible={visible} onDismiss={onHide}>
      <View style={{ flexDirection: 'row' }}>
        <FormGroup style={{ flex: 1 }}>
          <DateTimeInput mode='date'/>
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <DateTimeInput mode='time' label={'Select Hour'}/>
        </FormGroup>
      </View>
      <FormGroup>
        <NumberInput
          label="Amount"
          id="amount"
          value={formControls.amount}
          onChangeText={text => onChangeText('amount', text)}
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          label="Description"
          id="description"
          value={formControls.description}
          onChangeText={text => onChangeText('description', text)}
        />
      </FormGroup>
      <FormGroup>
        <SelectInput
          title={'Account'}
          value={formControls.account}
        />
      </FormGroup>
      <FormGroup>
        <SelectInput
          title={'Category'}
          value={formControls.category }
        />
      </FormGroup>
      <FormGroup>
        <SelectInput title={'Labels'} multiple />
      </FormGroup>
      <Button mode="contained" onPress={() => {
        alert(`IMAGINE THE ${selectedRecord ? 'UPDATED' : 'NEW'} RECORD`)
        onHide()
      }}>
        { selectedRecord ? 'UPDATE' : 'CREATE' }
      </Button>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
  }
})

export default RecordForm;