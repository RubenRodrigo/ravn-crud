import { TaskState } from "./interfaces";
import { TaskAction } from "./types";

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
	switch (action.type) {
		case 'taskLoad':
			return {
				...state,
				tasks: action.payload
			}
		case 'taskAdd':
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			}
		case 'taskUpdate':
			return {
				...state,
				tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
			}
		case 'taskDelete':
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload)
			}
		default:
			return state
	}
}