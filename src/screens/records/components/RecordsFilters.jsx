import React, { useEffect } from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import SelectInput from '../../../components/inputs/SelectInput';
import AppModal from '../../../components/AppModal';
import FormGroup from '../../../components/inputs/FormGroup';
import DateTimeInput from '../../../components/inputs/DateTimeInput';


const RecordsFilters = (props) => {
  const initialState = {
    labels: [],
    categories: [],
  }

  const [filters, setFilters] = React.useState(initialState);

  const {
    visible,
    onHide
  } = props;

  useEffect(() => {
    setFilters(initialState)
  }, [visible])

  return (
    <AppModal visible={visible} onDismiss={onHide}>
      <View style={{ flexDirection: 'row' }}>
        <FormGroup style={{ flex: 1 }}>
          <DateTimeInput mode='date' label={'Select start date'}/>
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <DateTimeInput mode='date' label={'Select end date'}/>
        </FormGroup>
      </View>
      <FormGroup>
        <SelectInput title={'Labels'} />
      </FormGroup>
      <FormGroup>
        <SelectInput title={'Categories'} multiple />
      </FormGroup>
      <Button
        mode="contained"
        onPress={() => {
          alert('IMAGINE THE FILTER')
          onHide()
        }}
      >
        FILTER
      </Button>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20
  }
})

export default RecordsFilters;