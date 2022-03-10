import { createContext } from "react";
import { Task } from "../interfaces/Task";
import { TaskState } from "../reducer/interfaces";

interface TaskContextProps {
	taskState: TaskState;
	taskAdd: (newTask: Task) => void
	taskLoaded: (task: Task[]) => void
}

export const TaskContext = createContext({} as TaskContextProps)