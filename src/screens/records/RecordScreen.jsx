import { useState } from 'react';
import RecordsList from './components/RecordsList';
import ScreenView from '../../components/ScreenView';
import DATA from '../../data';
import RecordsFilters from '../../components/modals/RecordsFilters';
import { Text } from 'react-native-paper';

function RecordScreen () {
  const [ records, setRecords ] = useState(DATA)

  return (
    <ScreenView
      title={'Records'}
      filterButton
      addButton
    >
      <RecordsList records={records}/>
    </ScreenView>
  );
}

export default RecordScreen;