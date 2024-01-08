import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../navigation";

type PriorityScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Priorities'>;
};


const PriorityScreen:React.FC<PriorityScreenProps> = ({navigation}) => {

  return(
    <div>In priority screen</div>
  )
}

export default PriorityScreen