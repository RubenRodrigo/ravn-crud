import { MdFilterAlt, } from 'react-icons/md'

import { SearchTask, TaskFormFilterValues } from '../../interfaces/Task'
import { TaskFilterForm } from '../Forms/TaskFilterForm'
import { Modal } from '../Modal/Modal'
import { useNavigate } from "react-router-dom";
import { getSearchQuery } from '../../helpers/query'

const INITIAL_VALUES: TaskFormFilterValues = {
	name: '',
	tags: [
		{ id: 1, name: 'ANDROID' },
	],
	status: { id: 1, name: 'BACKLOG' },
	pointEstimate: '',
	dueDate: '',
	dueTime: '',
	assigneeId: '',
	creatorId: ''
}

export const SearchFilter = () => {
	// const { taskLoad } = useContext(TaskContext)
	const navigate = useNavigate();

	const searchTasksAction = (taskFormValues: SearchTask) => {
		navigate({
			search: getSearchQuery(taskFormValues).toString()
		})
		// setLoading(true)
		// try {
		// 	const res = await searchTask(getSearchQuery(taskFormValues))
		// 	if (res.status === 200) {
		// 		setLoading(false)
		// 		const data = res.data
		// 		console.log(data);
		// 		// taskLoad(data)
		// 		toast.custom(
		// 			<ToastContent status="success" msg="Task were filtered." />
		// 		)
		// 	}

		// } catch (error) {
		// 	console.log(error);
		// 	toast.custom(
		// 		<ToastContent status="error" msg="We can\'t load the tasks." />
		// 	)
		// }
	}
	return (
		<>
			<Modal
				className="bg-neutral-700"
				openButton={(open) =>
					<button className="self-center" onClick={open}>
						<MdFilterAlt />
					</button>
				}
			>
				{
					({ onOpen, onClose }) => (
						<TaskFilterForm
							INITIAL_VALUES={INITIAL_VALUES}
							onClose={onClose}
							saveTask={searchTasksAction}
						/>
					)
				}
			</Modal>
		</>
	)
}
