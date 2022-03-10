import { TaskState } from "./interfaces";
import { TaskAction } from "./types";

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
	switch (action.type) {
		case 'taskLoaded':
			return {
				...state,
				tasks: action.payload
			}
		case 'taskAdd':
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			}
		default:
			return state
	}
}