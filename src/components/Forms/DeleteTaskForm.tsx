import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { TaskContext } from '../../context/TaskContext'
import { deleteTask } from '../../services/task'
import { Spinner } from '../Spinner/Spinner'
import { ToastContent } from '../Toast/ToastContent'

interface Props {
	onClose: () => void
	id: string
}
export const DeleteTaskForm = ({ onClose, id }: Props) => {

	const [loading, setLoading] = useState(false)
	const { taskDelete } = useContext(TaskContext)

	const deleteTaskAction = async () => {
		setLoading(true)
		try {
			const res = await deleteTask({ id })
			if (res.status === 200) {
				setLoading(false)
				taskDelete(id)
				toast.custom(
					<ToastContent status="success" msg="The task was deleted successfully." />
				)
			}

		} catch (error) {
			toast.custom(
				<ToastContent status="error" msg="We can\'t delete this task." />
			)
		}
	}
	return (
		<div className="text-white relative p-6 ">
			{
				loading &&
				<div className='absolute w-full top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-50'>
					<Spinner wd={20} hg={20} />
				</div>
			}
			<h3
				className="text-2xl font-bold leading-6 mb-4"
			>
				Delete task
			</h3>
			<div className="mt-2 w-full">
				<h3>Are you sure to delete this task?</h3>
				<div className="py-2 ">
					<button
						onClick={onClose}
						className="p-2 bg-green-600 bg-opacity-20 hover:bg-opacity-10 border-2 border-green-900 rounded-lg w-full"
					>
						Cancel
					</button>
				</div>
				<div className="py-2">
					<button
						onClick={() => deleteTaskAction()}
						className="p-2 bg-red-600 bg-opacity-20 hover:bg-opacity-10 border-2 border-red-900 rounded-lg w-full"
					>
						Delete Task
					</button>
				</div>
			</div>
		</div>
	)
}
