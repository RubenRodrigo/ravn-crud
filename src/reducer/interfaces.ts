import { Task } from "../interfaces/Task";

export interface TaskState {
	tasks: Task[];
	currentTask: Task | null;
}