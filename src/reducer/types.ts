import { Task } from "../interfaces/Task";

export type TaskAction =
	| { type: 'taskLoad', payload: Task[] }
	| { type: 'taskAdd', payload: Task }
	| { type: 'taskUpdate', payload: Task }
	| { type: 'taskDelete', payload: string }