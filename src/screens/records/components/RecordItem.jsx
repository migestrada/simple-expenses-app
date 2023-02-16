import React from "react";
import { List, Chip, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, TouchableHighlight } from "react-native";

function RecordItem(props) {
  const {
    item,
    item: {
      id,
      amount,
      type,
      date,
      account,
      description,
      category,
      labels
    },
    editRecord
  } = props;

  const getTypeInfo = () => {
    if (type === 'spent') {
      return {
        color: 'red',
        icon: 'currency-usd-off',
        symbol: '-$'
      }
    }

    if (type === 'income') {
      return {
        color: 'green',
        icon: 'currency-usd',
        symbol: '+$'
      }
    }
  }

  const {
    color,
    icon,
    symbol
  } = getTypeInfo()

  return (
    <>
      <List.Item
        onPress={() => editRecord(item)}
        key={id}
        title={() => <>
          <View style={styles.container}>
            <Text variant="titleLarge" style={{ color }}>{category}</Text>
            <Text variant="titleLarge" style={{ color }}>{symbol}{amount}</Text>
          </View>
        </>
        }
        description={() => (
          <>
            <View>
              <View style={styles.container}>
                <Text variant="bodyLarge">{description}</Text>
                <Text variant="bodyLarge">{date}</Text>
              </View>
              <View style={styles.chipList}>
                {
                  labels.map((label) => (
                    <Chip
                      key={`record-description-chip-${id}-${label}`}
                      onPress={() => console.log('Pressed')}
                    >
                      {label}
                    </Chip>
                  ))
                }
              </View>
            </View>
          </>
        )}
        left={props => <List.Icon {...props} color={color} icon={icon} />}
      />
      <Divider style={styles.divider}/>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    padding: 10
  },
  spent: {
    color: 'red'
  },
  income: {
    color: 'green'
  },
  chipList: {
    flexDirection: 'row',
    flexGrow: 12
  },
  chip: {
    border: 'solid 0.5px',
    borderRadius: 50,
    padding: 3
  },
  description: {
    marginTop: 5,
    marginBottom: 5,
  },
  divider: {
    marginLeft: 20,
    marginRight: 20,
  }
})

export default RecordItem;