import * as React from 'react';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const RecordsFilters = (props) => {
  const {
    visible,
    onHide
  } = props;

  const [filters, setFilters] = React.useState({
    email: ''
  });

  const onChangeText = (key, text) => setFilters({ ...filters, ...{ [key]: text } })

  return (
    <View>
      <Portal>
        <Modal visible={visible} onDismiss={onHide}>
          <View style={styles.container}>
            <TextInput
              label="Email"
              id="email"
              value={filters.email}
              onChangeText={text => onChangeText('email', text)}
            />
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1
  }
})

export default RecordsFilters;