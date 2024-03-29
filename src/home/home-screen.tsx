import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import React, {useState,useEffect,useContext, Fragment, createContext} from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { UserData, Task, Category, Priority } from '../models';
import { getAllCategoriesService } from '../service/category-service';
import { getAllPrioritiesService } from '../service/priority-service';
import { getAllTasksService } from '../service/task-service';
import { getUserData } from '../utils/storage-utils';
import { commonStyles } from '../utils/styles';
import { getDefaultCategory, getDefaultPriority } from '../utils/default-entities';
import TaskItem from './task-item';
import { CategoryContext, PriorityContext } from '../utils/context';
import AddTaskScreen from './add-task-screen';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen:React.FC<HomeScreenProps> = ({navigation}) => {
  const [userData, setUserData] = useState<UserData | null>()
  const [tasks, setTasks] = useState<Task[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [priorities, setPriorities] = useState<Priority[]>([])
  const [serverError, setServerError] = useState("")
  const [addTaskVisible, setAddTaskVisible] = useState(false)
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

  const getCategoryById = (categoryId: string): Category => {
    var category = categories.find(category => category.id === categoryId)
    if(category){
      return category 
    }else {
      return getDefaultCategory()
    }
  }
  const getPriorityById = (priorityId: string): Priority => {
    var priority =  priorities.find(priority => priority.id === priorityId)
    if(priority){
      return priority
    }else{
      return getDefaultPriority()
    }
  }
  

  const updateTask = (taskToUpdate: Task) => {
    console.log("On update!!!!!!!!!!!!!!!")
    const updatedTask = tasks.map((task) => 
    task.id === taskToUpdate.id ? taskToUpdate : task)
    setTasks(updatedTask)
  } 

  const deleteTask = (taskToDelete:Task) => {
    const updatedTask = tasks.filter((task) => task.id !== taskToDelete.id)
    setTasks(updatedTask)
    }
  const handleAdd = (newTask:Task) => {
    setTasks([newTask, ...tasks])
    setAddTaskVisible(false)
  }

  return(
    <CategoryContext.Provider value={categories}>
      <PriorityContext.Provider value={priorities}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Text>Hello {userData?.firstName} {userData?.lastName}</Text>
          <Button onPress={() => setAddTaskVisible(!addTaskVisible)} title="Add new"/>
          {addTaskVisible && (
            <AddTaskScreen 
            onAdd={(newTask) => handleAdd(newTask)}
            />
          )}
          {tasks.length > 0 && categories.length > 0 && priorities.length > 0 && (
              tasks.map((currTask) => (
                <Fragment key={currTask.id}>
                  <TaskItem
                    task={currTask}
                    taskCategory={getCategoryById(currTask.todoCategoryId)}
                    taskPriority={getPriorityById(currTask.todoPriorityId)}
                    onDelete={() => deleteTask(currTask)}
                    onUpdate={(newTask) => updateTask(newTask)}
                  />
                </Fragment>
              ))
              )}
          <Text style={commonStyles.errorText}>{serverError}</Text>

        </View>
              </ScrollView>
      </PriorityContext.Provider>
    </CategoryContext.Provider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scrollViewContent:{
    paddingBottom: 100
  }
})