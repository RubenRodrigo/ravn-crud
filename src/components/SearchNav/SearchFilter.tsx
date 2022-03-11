import { MdFilterAlt, } from 'react-icons/md'

import { SearchTask, TaskFormFilterValues } from '../../interfaces/Task'
import { TaskFilterForm } from '../Forms/TaskFilterForm'
import { Modal } from '../Modal/Modal'
import { useNavigate } from "react-router-dom";
import { getSearchQuery } from '../../helpers/query'

const INITIAL_VALUES: TaskFormFilterValues = {
	name: '',
	tags: [],
	status: null,
	pointEstimate: null,
	dueDate: '',
	dueTime: '',
	assigneeId: null,
	creatorId: null
}

export const SearchFilter = () => {
	const navigate = useNavigate();

	const searchTasksAction = (taskFormValues: SearchTask) => {
		navigate({
			search: getSearchQuery(taskFormValues).toString()
		})
	}
	return (
		<>
			<Modal
				className="bg-neutral-3"
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
