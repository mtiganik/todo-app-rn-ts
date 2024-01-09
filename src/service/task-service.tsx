import { Task } from "../models";
import axios from "axios";
import { getAxiosHeaders } from "./utils";
import GetUrl from "../utils/get-url";

const url = GetUrl() + "TodoTasks"
export const getAllTasksService = async(): Promise<Task[]> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.get(url, {headers})
      return response.data
    }else{
      console.error("Error getting tasks, headers are not available")
      return []
    }
  }catch(error){
    console.error("Error getting tasks")
    return []
  }
}

export const getTaskByIdService = async(taskId: string): Promise<Task | null> => {
  try{
    const headers =await getAxiosHeaders();
    if(headers){
      var response = await axios.get(`${url}/${taskId}`,{headers})
      return response.data
    }else{
      console.error("Headers are not available")
      return null
    }

  }catch(error){
    console.error("Error getting task")
    return null
  }
}

export const postTaskService = async(task: Task): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.post(url,task,{headers})
      return response.status
    }else{
      console.error("Headers are not available")
      return 0
    }
  }catch(error){
    console.error("Error posting task")
    return 0
  }
}

export const editTaskService = async(task: Task): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.put(`${url}/${task.id}`,task, {headers})
      return response.status
    }else{
      console.error("Headers are not available")
      return 0
    }
  }catch(error){
    console.error("Error editing task")
    return 0
  }
}

export const deleteTaskService = async(taskId: string): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.delete(`${url}/${taskId}`,{headers})
      return response.status
    }else{
      console.error("Headers are not available")
      return 0
    }
  }catch(error){
    console.error("Error deleting task")
    return 0
  }
}