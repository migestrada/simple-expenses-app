import React from 'react';
import { Modal, Portal } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';

const AppModal = (props) => {
  const {
    visible,
    onDismiss,
    children
  } = props;

  return (
    <Portal>
      <Modal
        style={styles.modal}
        visible={visible}
        onDismiss={onDismiss}
      >
        <ScrollView style={styles.content}>
          { children }
        </ScrollView>
      </Modal>
    </Portal>
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

export default AppModal;