import { StackNavigationProp } from '@react-navigation/stack';
import React, {useState, useContext} from 'react'
import { View, Button,Text } from 'react-native';
import { RootStackParamList } from '../navigation';
// import { NavigationActions } from 'react-navigation'
import { StackActions, NavigationAction } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Category, Priority, Task } from '../models';
import { CategoryContext, PriorityContext } from './home-screen';
import DropDownMenu from '../utils/drop-down-menu';
type EditScreenProps = {
  task: Task;
  currCat: Category;
  currPri: Priority;
  onEdit: (task:Task) => void
};

const EditTaskScreen:React.FC<EditScreenProps> = ({task, currCat, currPri, onEdit}) => {

  const [taskName, setTaskName] = useState(task.taskName)
  const catList = useContext(CategoryContext)
  const priList = useContext(PriorityContext)
const handlePress = () => {
  // .. do edit stuff here
}

const handleSelectCategory = (value:string) => {
  console.log(value)
}

const handleSelectPriority = (value:string) => {
  console.log(value)
}


  return(
  <View>
    <Text>Edit Task page</Text>
    <DropDownMenu items={priList} onSelectItem={handleSelectPriority} defaultLabel={currPri.priorityName} label="priority" />
      <DropDownMenu items={catList} onSelectItem={handleSelectCategory} defaultLabel={currCat.categoryName} label="category" />

    <Button onPress={handlePress} title='Edit'/>
  </View>
  )
}

export default EditTaskScreen