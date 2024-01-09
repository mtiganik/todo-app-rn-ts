import axios from "axios"
import uuid from "react-native-uuid";
import { Category,Priority,Task } from "../models";
import GetUrl from "../utils/get-url";
import { postCategoryService } from "../service/category-service";
import { postPriorityService } from "../service/priority-service";
import { postTaskService } from "../service/task-service";

const getDateInFuture = (day: number): Date => {
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + day);
  return futureDate;
};


const uuidWorkCategory = uuid.v4() as string
const uuidSchoolCategory = uuid.v4() as string
const uuidHomeCategory = uuid.v4() as string

const DefaultCategories: Category[] = [
  {
    id: uuidWorkCategory,
    categoryName: "Work",
    categorySort: 0,
    syncDt: new Date().toISOString(),
    tag:"work"
  },
  {
    id: uuidSchoolCategory,
    categoryName: "School",
    categorySort: 1,
    syncDt: new Date().toISOString(),
    tag:"school"

  },
  {
    id: uuidHomeCategory,
    categoryName: "Home",
    categorySort: 2,
    syncDt: new Date().toISOString(),
    tag:"home"

  }
]

const uuidHighPriority = uuid.v4() as string
const uuidMediumPriority = uuid.v4() as string
const uuidLowPriority = uuid.v4() as string

const DefaultPriorities:Priority[] = [
  {
    id: uuidHighPriority,
    priorityName: "High",
    prioritySort: 55,
    syncDt: new Date().toISOString(),
    tag:"high"

  },
  {
    id: uuidMediumPriority,
    priorityName: "Medium",
    prioritySort: 25,
    syncDt: new Date().toISOString(),
    tag:"medium"

  },
  {
    id: uuidLowPriority,
    priorityName: "Low",
    prioritySort: 8,
    syncDt: new Date().toISOString(),
    tag:"low"
  }
]


const datetimeNow = new Date();
const dateTime2WeeksFromNow = new Date(datetimeNow)
dateTime2WeeksFromNow.setDate(datetimeNow.getDate() + 14)

const DefaultTodoTasks:Task[] = [
  {
    id: uuid.v4() as string,
    taskName: "Pet the dog",
    dueDt: getDateInFuture(2).toISOString(),
    todoCategoryId: uuidHomeCategory,
    todoPriorityId: uuidMediumPriority,
    createdDt: new Date().toISOString(),
    syncDt:new Date().toISOString(),
    isArchieved: false,
    isCompleted: false
  },
  {
    id: uuid.v4() as string,
    taskName: "Make dinner",
    dueDt: getDateInFuture(3).toISOString(),
    todoCategoryId: uuidHomeCategory,
    todoPriorityId: uuidLowPriority,
    createdDt: new Date().toISOString(),
    syncDt:new Date().toISOString(),
    isArchieved: false,
    isCompleted: false
  },
  {
    id: uuid.v4() as string,
    taskName: "Read book",
    dueDt: getDateInFuture(5).toISOString(),
    todoCategoryId: uuidHomeCategory,
    todoPriorityId: uuidMediumPriority,
    createdDt: new Date().toISOString(),
    syncDt:new Date().toISOString(),
    isArchieved: false,
    isCompleted: false
  },
  {
    id: uuid.v4() as string,
    taskName: "Tell manager you want higher salary",
    dueDt: getDateInFuture(2).toISOString(),
    todoCategoryId: uuidWorkCategory,
    todoPriorityId: uuidHighPriority,
    createdDt: new Date().toISOString(),
    syncDt:new Date().toISOString(),
    isArchieved: false,
    isCompleted: false
  },
  {
    id: uuid.v4() as string,
    taskName: "Learn Math",
    dueDt: getDateInFuture(1).toISOString(),
    todoCategoryId: uuidSchoolCategory,
    todoPriorityId: uuidMediumPriority,
    createdDt: new Date().toISOString(),
    syncDt:new Date().toISOString(),
    isArchieved: false,
    isCompleted: false
  }
]


const InitializeNewUser = async () => {

  try {
    await Promise.all(
      DefaultCategories.map(async (category) => {
        try {
          await postCategoryService(category)
        } catch (categoryError) {
          console.error("Error creating category:", categoryError)
        }
      }))
  } catch (error) {
    console.error("Error creating categories", error)
  }
  console.log("Created categories")

  try {
    await Promise.all(
      DefaultPriorities.map(async (priority) => {
        try {
          await postPriorityService(priority)
        } catch (error) {
          console.error("Error creating priority", error)
        }
      }))
  } catch (priorityError) {
    console.error("Error creating priority: ", priorityError)
  }
  console.log("Created priorities")
  try {
    await Promise.all(
      DefaultTodoTasks.map(async (task) => {
        try {
          await postTaskService(task)

        } catch (taskError) {
          console.error("Error creating tasks: ", taskError)
        }
      })
    )
  } catch (promiseError) {
    console.error("Error initializing tasks: ", promiseError)
  }
  console.log("Created Todo Tasks Initial Values")
}

export default InitializeNewUser