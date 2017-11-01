import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const LoginScreen = () => (
  <View style={styles.container}>
    <Text>Login to RunHub</Text>
  </View>
);

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
  </View>
);

const CreateScreen = ()=> {
  <View style={styles.container}>
    <Text>Create Event Screen</Text>
  </View>
};



const RootTabs = TabNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-log-out' : 'ios-log-out-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  CreateEvent: {
    screen: CreateScreen,
    navigationOptions: {
      tabBarLabel: 'Add Event',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-add-circle' : 'ios-add-circle-icons'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

export default RootTabs;
