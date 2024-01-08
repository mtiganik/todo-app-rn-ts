import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from '../navigation';

type AddTaskScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddTask'>;
};


const AddTaskScreen:React.FC<AddTaskScreenProps> = ({navigation}) => {

  return(
    <div>Add task screen</div>
  )
}

export default AddTaskScreen