import React from "react";
import { UserData } from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosRequestConfig } from "axios";

export const getAxiosHeaders = async(): Promise<AxiosRequestConfig['headers'] | undefined> => {
  try{

  const userData: UserData | null = JSON.parse(await AsyncStorage.getItem('userData') || 'null')
  if (!userData) {
    console.log("Error getting userData")
    return undefined
  }
  else {
    const contentType = {'Content-Type': 'application/json'}
    const AuthHeader = { Authorization: 'Bearer ' + userData.token }
    const headers: AxiosRequestConfig["headers"] = {
      ...AuthHeader,
      ...contentType
    };
    return headers
  }
}catch(error){
  console.error("Error getting headers", error);
  return undefined; // Return undefined in case of error

}
}


export const getAuthorizationHeader =() => {
  const userData: UserData | null = JSON.parse(localStorage.getItem('userData') || 'null');
  if(!userData){
    // localStorage.removeItem("userData")
    console.log("Error getting userData")
    return null
  }else{
    return {Authorization: 'Bearer ' + userData.token}
  }
}



export const handle401Error = () => {
  //TODO: Implement method
  throw Error("Not implemented")
}