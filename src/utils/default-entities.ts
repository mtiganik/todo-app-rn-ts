import { Category, Priority } from "../models"
import uuid from "react-native-uuid";

export const getDefaultCategory = ():Category => {
  var cat:Category = {
    id:  uuid.v4() as string,
    categoryName: "Unknown",
    categorySort: 0,
    syncDt: new Date().toISOString(),
    tag: ""
  }
  return cat
}

export const getDefaultPriority = ():Priority => {
  var pri:Priority = {
    id: uuid.v4() as string,
    priorityName: "Unknown",
    prioritySort: 0,
    syncDt: new Date().toISOString(),
    tag: ""
  }
  return pri
}