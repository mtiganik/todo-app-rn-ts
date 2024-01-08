import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from '../navigation';

type EditScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EditTask'>;
};


const EditTaskScreen:React.FC<EditScreenProps> = ({navigation}) => {

  return(
    <div>Edit Task page</div>
  )
}

export default EditTaskScreen