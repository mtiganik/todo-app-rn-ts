import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../navigation";
import { View, Text, Button } from 'react-native';

type PriorityScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Priorities'>;
};


const PriorityScreen:React.FC<PriorityScreenProps> = ({navigation}) => {

  return(
    <Text>In priority screen</Text>
  )
}

export default PriorityScreen