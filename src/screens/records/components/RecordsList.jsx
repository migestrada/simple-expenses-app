import * as React from 'react';
import { List } from 'react-native-paper';
import RecordItem from './RecordItem';

const RecordsList = (props) => {
  const {
    records,
    setSelectedRecord,
    editRecord
  } = props;

  return (
    <List.Section>
      {records.map(item => (
        <RecordItem
          key={item.id}
          item={item}
          editRecord={editRecord}
        />
      ))}
    </List.Section>
  )
}

export default RecordsList;
