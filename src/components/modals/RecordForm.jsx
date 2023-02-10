import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { View } from 'react-native';

const Filters = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 200};

  return (
    <View>
      <Portal>
        <Modal presentationStyle="pageSheet" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={{ flex: 1}}>
          <Text>AAAAAAAAAAAAAAAAA.</Text>
          </View>
        </Modal>
      </Portal>
      <Button icon="camera" mode="contained" onPress={showModal}>
        Filters
      </Button>
    </View>
  );
};

export default Filters;