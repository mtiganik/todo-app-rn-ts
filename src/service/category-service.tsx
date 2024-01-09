import { Category } from "../models";
import axios from "axios";
import {getAxiosHeaders } from "./utils";
import GetUrl from "../utils/get-url";

const url = GetUrl() + "TodoCategories"
const contentType = {'Content-Type': 'application/json'}

export const getAllCategoriesService = async(): Promise<Category[]> => {
  try {
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.get(url, { headers })
      return response.data
    } else {
      console.error("Headers not available")
      return []
    }
  }catch(error){
    console.error("Error getting categories:", error)
    return []
  }
  return []
}
export const getCategoryByIdService = async(catId: string): Promise<Category | null> => {
  try{
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.get(`${url}/${catId}`, { headers })
      return response.data
    } else {
      console.error("Headers not available")
      return null
    }
  }catch(error){
    console.error("Error getting category: ", error)
    return null
  }
}

export const postCategoryService = async( cat: Category): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.post(url, cat, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
  }catch(error){
    console.log("Error posting category:",error)
  }
  return 0
}

export const editCategoryService = async(cat: Category): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if (headers) {
      const id = cat.id
      var response = await axios.put(`${url}/${id}`, cat, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
  }catch(error){
    console.error("Error updating category", error)
    return 0
  }
}

export const deleteCategoryService = async(catId: string): Promise<number> => {
  try{
    const headers = await getAxiosHeaders();
    if (headers) {
      var response = await axios.delete(`${url}/${catId}`, { headers })
      return response.status
    } else {
      console.error("Headers not available")
      return 0
    }
  }catch(error){
    console.error("Error deleting category", error)
    return 0
  }
}