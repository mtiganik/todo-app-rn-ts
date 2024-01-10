import { createContext } from "react"
import { Category, Priority } from "../models"
export const CategoryContext = createContext<Category[]>([])
export const PriorityContext = createContext<Priority[]>([])
