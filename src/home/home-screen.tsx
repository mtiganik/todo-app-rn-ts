import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from '../navigation';
import { removeUserData } from '../utils/storage-utils';
import { View, Text, Button, Alert } from 'react-native';
import { EditIcon, ShowPassword, SettingsIcon, HomeCategoryIcon, WorkCategoryIcon,SchoolCategoryIcon,UnknownCategoryIcon, OtherCategoryIcon } from '../utils/svg-images';
import { SvgXml } from 'react-native-svg';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const HomeScreen:React.FC<HomeScreenProps> = ({navigation}) => {
  const handleLogout = async () => {
    // Remove user data from AsyncStorage on logout
    await removeUserData();
    navigation.navigate('Login');
  };

  const showMenuOptions = () => {
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
    <View>
      <Text>Home Screen</Text>
      <Button title="Show Menu" onPress={showMenuOptions} />
      <SvgXml
            xml={EditIcon}
            width={24}
            height={24}
            stroke="rgb(0,250,0)"
          />
      <SvgXml
            xml={ShowPassword}
            width={24}
            height={24}
          />
      <SvgXml
            xml={SettingsIcon}
            width={24}
            height={24}
          />
      <SvgXml
            xml={HomeCategoryIcon}
            width={24}
            height={24}
          />
      <SvgXml
            xml={WorkCategoryIcon}
            width={24}
            height={24}
          />
      <SvgXml
            xml={SchoolCategoryIcon}
            width={24}
            height={24}
          />
      <SvgXml
            xml={UnknownCategoryIcon}
            width={36}
            height={36}
          />
      <SvgXml
            xml={OtherCategoryIcon}
            width={24}
            height={24}
          />

      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}
//  { EditIcon, ShowPassword, SettingsIcon, HomeCategoryIcon, WorkCategoryIcon,SchoolCategoryIcon,UnknownCategoryIcon, OtherCategoryIcon } from '../utils/svg-images';

export default HomeScreen