import React, { useState, useContext } from 'react'
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { Category, Priority, Task } from '../models';
import { CategoryContext, PriorityContext } from '../utils/context';
import { SelectList } from 'react-native-dropdown-select-list'
import CalendarItem from '../utils/calendar-item';
import { formatDateToUI } from '../utils/format-date';
import { editTaskService, postTaskService } from '../service/task-service';
import { commonStyles } from '../utils/styles';
import uuid from "react-native-uuid";

type AddTaskScreenProps = {
  onAdd: (task:Task) => void;
};


const AddTaskScreen:React.FC<AddTaskScreenProps> = ({onAdd}) => {
  const catList = useContext(CategoryContext) 
  const priList = useContext(PriorityContext)
  const [taskName, setTaskName] = useState("")
  const [catId,setCatId] = useState("")
  const [priId, setPriId] = useState("")
  const [dueDt, setDueDt] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState("")

  const catListOptions = catList.map((category) => ({
    key: category.id,
    value: category.categoryName
  }))
  const priListOptions = priList.map((priority) => ({
    key: priority.id,
    value: priority.priorityName
  }))

  const handleAdd = async() => {
    const newTask:Task = {
      id: uuid.v4() as string,
      taskName: taskName,
      createdDt: new Date().toISOString(),
      dueDt: dueDt,
      isCompleted: false,
      isArchieved: false,
      todoCategoryId: catId,
      todoPriorityId: priId,
      syncDt: new Date().toISOString()
    }
    var result = await postTaskService(newTask)
    if(result >= 200 && result < 300){
      setErrorMsg("")
      onAdd(newTask)
    }else{
      setErrorMsg("Error adding task")
    }

  }
  const handleSetDueDt = (value:string) => {
    const dateObject = new Date(value);
    const isoDateString = dateObject.toISOString();  
    setDueDt(isoDateString)
  }


  return(
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "400" }}>Add new Task</Text>
      <Text style={styles.baseText}>Task name</Text>
      <TextInput
        style={styles.textInputStyle}
        value={taskName}
        onChangeText={setTaskName}
      />
      <Text style={styles.baseText}>Category</Text>
      <View style={styles.selectItemStyle}>
        <SelectList
          setSelected={(val: string) => setCatId(val)}
          data={catListOptions}
          placeholder="Select category"
        />
      </View>
      <Text style={styles.baseText}>Priority</Text>
      <View style={styles.selectItemStyle}>

        <SelectList
          setSelected={(val: string) => setPriId(val)}
          data={priListOptions}
          placeholder="Select priority"
        />
      </View>
      <Text style={styles.baseText}>Due date:</Text>
      <View style={styles.selectItemStyle}>
      <CalendarItem selectedDate={Date()} setSelectedDate={handleSetDueDt} />
      </View>

      <Text style={styles.baseText}>Selected Date: {formatDateToUI(dueDt)} </Text>
      <Text style={styles.baseText}>Everything ready? Add:</Text>
      <View style={styles.selectItemStyle}>
      <Button  onPress={handleAdd} title='Add' />
      <Text style={commonStyles.errorText}>{errorMsg}</Text>

      </View>

    </View>
  )
}

export default AddTaskScreen



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

