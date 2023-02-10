import * as React from 'react';
import { List } from 'react-native-paper';
import RecordItem from './RecordItem';

const RecordsList = ({ records }) => (
  <List.Section>
    {records.map(item => <RecordItem id={item.id} key={item.id} item={item}/>)}
  </List.Section>
);

export default RecordsList;
