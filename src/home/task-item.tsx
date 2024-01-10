import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import {Task, Category, Priority } from "../models";
import { formatDateToUI } from "../utils/format-date";
import { SvgXml } from "react-native-svg";
import { CheckSign, EditIcon, GarbagePin } from "../utils/svg-images";
import EditTaskScreen from "./edit-task-screen";

interface TaskItemProps {
  task: Task;
  taskCategory: Category;
  taskPriority: Priority;
  onDelete: () => void;
  onUpdate: (task:Task) => void;
}

const TaskItem:React.FC<TaskItemProps> = ({task,taskCategory,taskPriority, onDelete, onUpdate}) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)
  const [editViewVisible, setEditViewVisible] = useState(false)
  const handleMarkAsDone = () => { 
    const updatedTask = {...task, isCompleted: !task.isCompleted, syncDt: new Date().toISOString()}
    setIsCompleted(!isCompleted)
    onUpdate(updatedTask)
  }

  const handleShowEditView = () => {
    setEditViewVisible(!editViewVisible)
  }
  const handleEdit = (newTask:Task) => {
    setEditViewVisible(false)
    onUpdate(newTask)
  } 

  const handleDelete = () => {
    onDelete()
  }
  return(
    <View>
    <View 
    style={[styles.container,{
      backgroundColor: isCompleted ? "springgreen" : "orangered"
    }]}
    >

    <View style={styles.leftContent}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{task.taskName}</Text>
      <Text>Category: {taskCategory.categoryName}</Text>
      <Text>Priority: {taskPriority.priorityName}</Text>
      <Text>Completed: {isCompleted ? "Yes" : "No"}</Text>
      <Text>Created: {formatDateToUI(task.createdDt)}</Text>
      <Text>Due Date: {formatDateToUI(task.dueDt)}</Text>
    </View>
    <View style={styles.rightContent}>
    <TouchableOpacity onPress={handleMarkAsDone}>
          <View style={styles.button} >
            <SvgXml
              xml={CheckSign}
              width={25}
              height={25}
            />
            <Text style={styles.buttonText}>MARK DONE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowEditView}>
          <View style={styles.button} >
            <SvgXml
              xml={EditIcon}
              width={25}
              height={25}
            />
            <Text style={styles.buttonText}>EDIT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <View style={styles.button}>
            <SvgXml
              xml={GarbagePin}
              width={25}
              height={25}
            />
            <Text style={styles.buttonText}>DELETE</Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
    {editViewVisible && (
      <EditTaskScreen 
      task={task} 
      currCat={taskCategory} 
      currPri={taskPriority} 
      onEdit={ (newTask) => handleEdit(newTask) }      
      />
    )}
    </View>

  )
}

export default TaskItem


const styles = StyleSheet.create({
  button:{
    flexDirection: 'row',
    alignItems:"center",
    backgroundColor:"#24a0ed",
    borderRadius:5,
    margin:3,
    padding:3

  },
  buttonText:{
    fontWeight:"500",
    color:"white"
  },
  container:{
    borderWidth:1,
    borderRadius:5,
    padding:5,
    margin:5,
    // flex:1,
    justifyContent: 'center',
    flexDirection: 'row',

  },
  leftContent:{
    flex:3
  },
  rightContent:{
    flex:2,
    justifyContent:"center"
  }
})