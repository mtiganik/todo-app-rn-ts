import React, { useState } from "react";
import { View, Text, Button, Alert } from 'react-native';
import {Task, Category, Priority } from "../models";

interface TaskItemProps {
  task: Task;
  taskCategory: Category;
  taskPriority: Priority;
  onDelete: () => void;
  onUpdate: (task:Task) => void;
}

const TaskItem:React.FC<TaskItemProps> = ({task,taskCategory,taskPriority, onDelete, onUpdate}) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)
  const handleMarkAsDone = () => { 
    const updatedTask = {...task, isCompleted: !task.isCompleted, syncDt: new Date().toISOString()}
    setIsCompleted(!isCompleted)
    onUpdate(updatedTask)
  }

  const handleEdit = () => {
    onUpdate(task)
  }

  const handleDelete = () => {
    onDelete()
  }
  return(
    <View >
      <Text>{task.taskName}</Text>
      <Text>{task.dueDt}</Text>
      <Text>category: {taskCategory.categoryName}</Text>
      <Text>priority: {taskPriority.priorityName}</Text>
      <Button onPress={handleMarkAsDone} title="Mark done"/>
      <Button onPress={handleEdit} title="Edit"/>
      <Button onPress={handleDelete} title="delete"/>
    </View>
  )
}

export default TaskItem