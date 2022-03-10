import { Task } from "../interfaces/Task";

export type TaskAction =
	| { type: 'taskLoaded', payload: Task[] }
	| { type: 'taskAdd', payload: Task }