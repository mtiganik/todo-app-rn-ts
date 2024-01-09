import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import React, {useState,useEffect,useContext, Fragment} from 'react'
import { View, Text, Button, Alert } from 'react-native';
import { UserData, Task, Category, Priority } from '../models';
import { getAllCategoriesService } from '../service/category-service';
import { getAllPrioritiesService } from '../service/priority-service';
import { getAllTasksService } from '../service/task-service';
import { getUserData } from '../utils/storage-utils';
import { commonStyles } from '../utils/styles';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const HomeScreen:React.FC<HomeScreenProps> = ({navigation}) => {
  const [userData, setUserData] = useState<UserData | null>()
  const [tasks, setTasks] = useState<Task[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [priorities, setPriorities] = useState<Priority[]>([])
  const [serverError, setServerError] = useState("")
  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log("Start of fetching")
        setUserData(await getUserData())
        setCategories(await getAllCategoriesService());
        setPriorities(await getAllPrioritiesService())
        setTasks(await getAllTasksService())
        console.log("Fetching complete")
      } catch (error) {
        console.error("error ", error)
      }
    }
    fetchData()
  }, [])
  return(
    <View>
      <Text>Hello {userData?.firstName} {userData?.lastName}</Text>
      {tasks.length > 0 && categories.length > 0 && priorities.length > 0 && (
        tasks.map((currTask) => (
          <Fragment key={currTask.id}>
            <Text>{currTask.taskName}</Text>
          </Fragment>
        ))
      )}
      <Text style={commonStyles.errorText}>{serverError}</Text>

    </View>
  )
}

export default HomeScreen