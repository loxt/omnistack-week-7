import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';
import camera from './assets/camera.png';

export default createAppContainer(
  createStackNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
          return {
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
                <Image source={camera} />
              </TouchableOpacity>
            )
          };
        }
      },

      New: {
        screen: New
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: () => <Image source={logo} />,
        headerBackTitle: null
      },
      mode: 'modal'
    }
  )
);
