import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import RecordsList from './components/RecordsList';
import ScreenView from '../../components/ScreenView';
import DATA from '../../data';
import RecordsFilters from './components/RecordsFilters';
import RecordForm from './components/RecordForm';

function RecordScreen () {
  const [filterVisible, setFilterVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [records, setRecords] = useState(DATA)
  const [selectedRecord, setSelectedRecord] = useState(null)

  useEffect(() => {
    if (!formVisible) {
      setSelectedRecord(null)
    }
  }, [formVisible])

  const editRecord = (record) => {
    setSelectedRecord(record)
    setFormVisible(true)
  }

  return (
    <ScreenView
      title={'Records'}
      actionButtons={<>
        <Appbar.Action icon="filter-menu" onPress={() => setFilterVisible(!filterVisible)} />
        <Appbar.Action icon="plus" onPress={() => setFormVisible(!formVisible)} />
      </>}
    >

      <RecordsList
        records={records}
        selectedRecord={selectedRecord}
        setSelectedRecord={setSelectedRecord}
        editRecord={editRecord}
      />
      {
        filterVisible &&
        <RecordsFilters
          visible={filterVisible}
          onHide={() => setFilterVisible(false) }
        />
      }

      {
        formVisible &&
        <RecordForm
          selectedRecord={selectedRecord}
          visible={formVisible}
          onHide={() => setFormVisible(false) }
        />
      }

    </ScreenView>
  );
}

export default RecordScreen;