import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../navigation";
import { View, Text, Button } from 'react-native';

type CategoryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Categories'>;
};



const CategoryScreen:React.FC<CategoryScreenProps>= ({navigation}) => {

  return(
    <Text>Cat screen</Text>
  )
}

export default CategoryScreen