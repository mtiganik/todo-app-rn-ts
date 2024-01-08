import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from '../navigation';
import { removeUserData } from '../utils/storage-utils';
import { View, Text, Button } from 'react-native';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const HomeScreen:React.FC<HomeScreenProps> = ({navigation}) => {
  const handleLogout = async () => {
    // Remove user data from AsyncStorage on logout
    await removeUserData();
    navigation.replace('Login');
  };

  return(
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default HomeScreen