import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { SettingsIcon } from './svg-images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { removeUserData } from './storage-utils';
import { RootStackParamList } from '../navigation';

type NavigationButtonProps = {
  navigation: NavigationProp<RootStackParamList>;
};


export const NavigationButton:React.FC<NavigationButtonProps> = ({navigation}) => {

  const handleLogout = async () => {
    // Remove user data from AsyncStorage on logout
    await removeUserData();
    navigation.navigate('Login');
  };

  const handleNavigationPress = () => {
    Alert.alert(
      'Menu Options',
      'Choose an option',
      [
        {
          text: 'Categories',
          onPress: () => navigation.navigate('Categories'),
        },
        {
          text: 'Priorities',
          onPress: () => navigation.navigate('Priorities'),
        },
        {
          text: 'Logout',
          onPress: handleLogout,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return(
    <SvgXml
    xml={SettingsIcon}
    width={24}
    height={24}
    onPress={handleNavigationPress}
  />
)
}