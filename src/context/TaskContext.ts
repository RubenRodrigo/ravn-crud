import { createContext } from "react";
import { Task } from "../interfaces/Task";
import { TaskState } from "../reducer/interfaces";

interface TaskContextProps {
	taskState: TaskState;
	taskAdd: (newTask: Task) => void
	taskLoad: (tasks: Task[]) => void
	taskUpdate: (task: Task) => void
	taskDelete: (id: string) => void
}

export const TaskContext = createContext({} as TaskContextProps)