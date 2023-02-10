import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import RecordScreen from './records/RecordScreen';
import SettingsScreen from './settings/SettingsScreen';
import DashboardScreen from './dashboard/DashboardScreen'

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'records', title: 'Records', focusedIcon: 'inbox-multiple', unfocusedIcon: 'inbox-multiple-outline'},
    { key: 'dashboard', title: 'Dashboard', focusedIcon: 'view-dashboard-variant', unfocusedIcon: 'view-dashboard-variant-outline' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    records: RecordScreen,
    dashboard: DashboardScreen,
    settings: SettingsScreen,
  });

  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </NavigationContainer>
  );
};

export default Main;