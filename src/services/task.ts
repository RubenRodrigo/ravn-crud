import { axiosInstance } from "../helpers/axiosInstance"
import { TaskBase } from "../interfaces/Task"


export const getTask = async () => {
	return await axiosInstance().get('/tasks')
}

interface CreateTaskProps {
	task: TaskBase
}
export const createTask = async ({ task }: CreateTaskProps) => {
	return await axiosInstance().post('/tasks', { ...task })
}