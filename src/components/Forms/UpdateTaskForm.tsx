import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { TaskContext } from '../../context/TaskContext';
import { point, status, tags } from '../../helpers/data';
import { getDateTime } from '../../helpers/dates';
import { PointEstimateSelect, StatusSelect, TagsSelect } from '../../interfaces/Selects';
import { PointEstimate, Status, Tags, Task, TaskBase } from '../../interfaces/Task'
import { updateTask } from '../../services/task'

import { ToastContent } from '../Toast/ToastContent';
import { TaskForm } from './TaskForm';

interface Props {
	onClose: () => void
	task: Task
}

export const UpdateTaskForm = ({ onClose, task }: Props) => {

	const [loading, setLoading] = useState(false)
	const { taskUpdate } = useContext(TaskContext)

	const updateTaskAction = async (taskFormValues: TaskBase) => {
		setLoading(true)
		try {
			const res = await updateTask({ task: taskFormValues, id: task.id })
			if (res.status === 200) {
				setLoading(false)
				const data = res.data
				taskUpdate(data)
				toast.custom(
					<ToastContent status="success" msg="The task was updated successfully." />
				)
			}

		} catch (error) {
			toast.custom(
				<ToastContent status="error" msg="We can\'t updated the task." />
			)
		} finally {
			onClose();
		}
	}

	return (
		<TaskForm
			loading={loading}
			saveTask={updateTaskAction}
			INITIAL_VALUES={{
				name: task.name,
				tags: getTags(task.tags),
				status: getStatus(task.status as Status),
				pointEstimate: getPointStimate(task.pointEstimate),
				dueDate: getDateTime(task.dueDate).today,
				dueTime: getDateTime(task.dueDate).displayTime,
				assigneeId: task.assignee ?? null
			}}
		/>
	)
}


const getTags = (taskTags: Tags[]): TagsSelect[] => {
	return taskTags.map(tag => tags.find(e => e.name === tag) ?? { id: 1, name: 'ANDROID' })
}

const getStatus = (taskStatus: Status): StatusSelect | null => {
	return status.find(e => e.name === taskStatus) ?? null
}

const getPointStimate = (taskPoint: PointEstimate): PointEstimateSelect | null => {
	return point.find(e => e.name === taskPoint) ?? null
}