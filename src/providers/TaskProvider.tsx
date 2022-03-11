import { useMemo, useReducer } from 'react'
import { TaskContext } from '../context/TaskContext'
import { Task } from '../interfaces/Task'
import { TaskState } from '../reducer/interfaces'
import { taskReducer } from '../reducer/state'

const { Provider } = TaskContext

interface Props {
	children: JSX.Element | JSX.Element[],
	INITIAL_STATE: TaskState
}

export const TaskProvider = ({ children, INITIAL_STATE }: Props) => {
	const [taskState, dispatch] = useReducer(taskReducer, INITIAL_STATE)

	const taskAdd = (newTask: Task) => {
		dispatch({ type: 'taskAdd', payload: newTask })
	}

	const taskLoad = (tasks: Task[]) => {
		dispatch({ type: 'taskLoad', payload: tasks })
	}

	const taskUpdate = (task: Task) => {
		dispatch({ type: 'taskUpdate', payload: task })
	}

	const taskDelete = (id: string) => {
		dispatch({ type: 'taskDelete', payload: id })
	}

	return (
		<Provider
			value={{
				taskState,
				taskAdd,
				taskLoad,
				taskUpdate,
				taskDelete
			}}
		>
			<div>{children}</div>
		</Provider>
	)
}
