import React from 'react';
import Constants from 'expo-constants';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

function ScreenView (props) {
  const {
    children,
    title,
    actionButtons
  } = props

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title || 'Undefined'} />
        { actionButtons }
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  text: {
    fontSize: 42,
  },
});

export default ScreenView;