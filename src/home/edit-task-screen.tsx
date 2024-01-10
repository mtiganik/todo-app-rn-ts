import React, { useState, useContext } from 'react'
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category, Priority, Task } from '../models';
import { CategoryContext, PriorityContext } from '../utils/context';
import { SelectList } from 'react-native-dropdown-select-list'
import CalendarItem from '../utils/calendar-item';
import { formatDateToUI } from '../utils/format-date';
import { editTaskService } from '../service/task-service';
import { commonStyles } from '../utils/styles';

type EditScreenProps = {
  task: Task;
  currCat: Category;
  currPri: Priority;
  onEdit: (task: Task) => void
};

const EditTaskScreen: React.FC<EditScreenProps> = ({ task, currCat, currPri, onEdit }) => {

  const [taskName, setTaskName] = useState(task.taskName)
  const [selectedCat, setSelectedCat] = useState<string>(task.todoCategoryId)
  const [selectedPri, setSelectedPri] = useState<string>(task.todoPriorityId)
  const [selectedDueDt, setSelectedDueDt] = useState<string>(task.dueDt)
  const [errorText, setErrortext] = useState<string>("")
  const catList = useContext(CategoryContext) // Category[]
  const priList = useContext(PriorityContext)

  const catListOptions = catList.map((category) => ({
    key: category.id,
    value: category.categoryName
  }))
  const priListOptions = priList.map((priority) => ({
    key: priority.id,
    value: priority.priorityName
  })
  )
  const handlePress = async() => {
    var newTask = task
    newTask.taskName = taskName
    newTask.todoCategoryId = selectedCat
    newTask.todoPriorityId = selectedPri
    newTask.dueDt = selectedDueDt
    newTask.syncDt = new Date().toISOString()

    var result = await editTaskService(newTask)
    if(result >= 200 && result <300){
      setErrortext("")
      onEdit(newTask)
    }else{
      console.error("Error editing data")
      setErrortext("Error editing data")
    }
  }

  const handleSelectCategory = (value: string) => {
    console.log(value)
  }

  const handleSelectPriority = (value: string) => {
    console.log(value)
  }
  const handleSetDueDt = (value:string) => {
    const dateObject = new Date(value);
    const isoDateString = dateObject.toISOString();  
    setSelectedDueDt(isoDateString)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "400" }}>Edit {task.taskName}</Text>
      <Text style={styles.baseText}>Task name</Text>
      <TextInput
        style={styles.textInputStyle}
        value={taskName}
        onChangeText={setTaskName}
      />
      <Text style={styles.baseText}>Category</Text>
      <View style={styles.selectItemStyle}>
        <SelectList
          setSelected={(val: string) => setSelectedCat(val)}
          data={catListOptions}
          placeholder={currCat.categoryName}
        />
      </View>
      <Text style={styles.baseText}>Priority</Text>
      <View style={styles.selectItemStyle}>

        <SelectList
          setSelected={(val: string) => setSelectedPri(val)}
          data={priListOptions}
          placeholder={currPri.priorityName}
        />
      </View>
      <Text style={styles.baseText}>Due date:</Text>
      <View style={styles.selectItemStyle}>
      <CalendarItem selectedDate={task.dueDt} setSelectedDate={handleSetDueDt} />
      </View>

      <Text style={styles.baseText}>Selected Date: {formatDateToUI(selectedDueDt)} </Text>
      <Text style={styles.baseText}>Everything ready? Edit:</Text>
      <View style={styles.selectItemStyle}>
      <Button  onPress={handlePress} title='Edit' />
      <Text style={commonStyles.errorText}>{errorText}</Text>

      </View>

    </View>
  )
}

export default EditTaskScreen

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 30,
    marginTop:20
  },
  textInputStyle: {
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    paddingLeft:20
  },
  selectItemStyle: {
    marginLeft: 15,
    marginRight: 15
  },
  container:{
    margin:20
  }

});

