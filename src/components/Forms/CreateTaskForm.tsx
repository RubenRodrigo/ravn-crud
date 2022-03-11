import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { TaskContext } from '../../context/TaskContext';
import { getDateTime } from '../../helpers/dates';
import { TaskBase, TaskFormValues } from '../../interfaces/Task'
import { createTask } from '../../services/task'

import { ToastContent } from '../Toast/ToastContent';
import { TaskForm } from './TaskForm';

interface Props {
	onClose: () => void
}
const INITIAL_VALUES: TaskFormValues = {
	name: '',
	tags: [],
	status: null,
	pointEstimate: null,
	dueDate: getDateTime().today,
	dueTime: getDateTime().displayTime,
	assigneeId: null
}
export const CreateTaskForm = ({ onClose }: Props) => {

	const [loading, setLoading] = useState(false)
	const { taskAdd } = useContext(TaskContext)

	const createTaskAction = async (taskFormValues: TaskBase) => {
		setLoading(true)
		try {
			const res = await createTask({ task: taskFormValues })
			if (res.status === 201) {
				setLoading(false)
				const data = res.data
				taskAdd(data)
				toast.custom(
					<ToastContent status="success" msg="The task was created successfully." />
				)
			}

		} catch (error) {
			toast.custom(
				<ToastContent status="error" msg="We can\'t create the task." />
			)
		} finally {
			onClose();
		}
	}

	return (
		<TaskForm
			loading={loading}
			saveTask={createTaskAction}
			INITIAL_VALUES={INITIAL_VALUES}
		/>
	)
}
