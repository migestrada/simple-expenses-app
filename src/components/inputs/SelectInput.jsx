import React, { useState, useEffect }from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { TextInput, Button, Menu, Divider, Provider } from 'react-native-paper';

const SelectInput = (props) => {
  const [localValue, setLocalValue] = useState([])
  const [visible, setVisible] = React.useState(false);

  const {
    title,
    value,
    multiple,
    options = [
      { value: 1, label: 'AAAAAAAAAAA' },
      { value: 2, label: 'BBBBBBBBBBB' },
      { value: 3, label: 'CCCCCCCCCCC' },
      { value: 4, label: 'DDDDDDDDDDD' },
    ]
  } = props;

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const selectOption = (selectedValue) => {
    if (!multiple) {
      closeMenu()
    }

    if (localValue.includes(selectedValue)) {
      setLocalValue(localValue.filter(val => val !== selectedValue))
      return
    }

    if (multiple) {
      setLocalValue([...localValue, selectedValue])
      return
    }

    setLocalValue([selectedValue])
  }

  const findOptionLabel = (val) => {
    return options.find(option => option.value === val)?.label || null
  }

  return (
    <View style={styles.container}>
      <Menu
        style={styles.menu}
        anchorPosition="bottom"
        visible={visible}
        onDismiss={closeMenu}
        anchor={<TouchableHighlight onPress={openMenu} >
          <TextInput
            right={<TextInput.Icon onPress={openMenu} icon="chevron-down" />}
            label={title || 'Select a value'}
            value={localValue.map(val => findOptionLabel(val)).join(', ')}
            editable={false}
          />
        </TouchableHighlight>
      }
      >
        {
          options.map((option, index) => (
            <Menu.Item
              key={option.value}
              style={localValue.includes(option.value) && styles.selectedItem}
              onPress={() => selectOption(option.value)}
              title={option.label}
            />
          ))
        }
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  menu: {
    display: 'flex',
    flex: 1
  },
  selectedItem: {
    backgroundColor: 'rgba(28, 27, 31, 0.12)'
  }
})

export default SelectInput;