import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView , ScrollView, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import RecordsFilters from './modals/RecordsFilters';

function ScreenView (props) {
  const [filterVisible, setFilterVisible] = React.useState(false);

  const {
    children,
    title,
    addComponent,
    filterButton,
    addButton
  } = props

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title || 'Undefined'} />
        { filterButton && <Appbar.Action icon="filter-menu" onPress={() => setFilterVisible(!filterVisible)} /> }
        { addButton && <Appbar.Action icon="plus" onPress={() => {}} /> }
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        {children}
      </ScrollView>

      { <RecordsFilters visible={filterVisible} onHide={() => setFilterVisible(false) } /> }
      { addComponent }
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