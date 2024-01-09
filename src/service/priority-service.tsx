import { Priority } from "../models";
import axios from "axios";
import { getAxiosHeaders } from "./utils";
import GetUrl from "../utils/get-url";

const url = GetUrl() + "TodoPriorities"

export const getAllPrioritiesService = async(): Promise<Priority[]> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.get(url,{headers})
      return response.data
    }else{
      console.error("Headers not available")
      return []
    }
  }catch(error){
    console.error("Error getting priorities", error)
    return []
  }
}

export const getPriorityByIdService = async(priorityId: string): Promise<Priority | null> => {
  try{
    const headers = await getAxiosHeaders();
    if(headers){
      var response = await axios.get(`${url}/${priorityId}`,{headers})
      return response.data
    }else{
      console.error("Headers not available")
      return null
    }
  }catch(error){
    console.error("Error getting priority", error)
    return null
  }
}

export const postPriorityService = async(pri: Priority): Promise<number> => {
  try {
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.post(url, pri, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
}catch(error){
    console.error("Error posting priority", error)
    return 0
  }
}

export const editPriorityService = async(pri: Priority): Promise<number> => {
  try {
    const headers = await getAxiosHeaders();
    if (headers) {
      const priId = pri.id
      var response = await axios.put(`${url}/${priId}`, pri, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
  }catch(error){
    console.error("Error updating priority", error)
    return 0
  }
}

export const deletePriorityService = async (priId: string): Promise<number> => {
  try {
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.delete(`${url}/${priId}`, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
  }catch(error){
    console.error("Error deleting priority", error)
    return 0
  }
}



