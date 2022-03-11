import { MdAdd, MdOutlineDashboard, MdOutlineList } from "react-icons/md"
import { Task } from "../../interfaces/Task"
import { CreateTaskForm } from "../Forms/CreateTaskForm"
import { Modal } from "../Modal/Modal"

interface Props {
	addTask?: (newTask: Task) => void
}

export const HeaderTasks = ({ addTask }: Props) => {
	return (
		<div className="flex justify-between text-xl my-3">
			<div className="flex rounded-lg">
				<button className="p-2 rounded-lg self-center">
					<MdOutlineList />
				</button>
				<button className="p-2 text-primary-4 border-primary-4 border-2 rounded-lg">
					<MdOutlineDashboard />
				</button>
			</div>
			<div>
				<Modal
					className="bg-neutral-3"
					openButton={(open) =>
						<button
							onClick={open}
							className="p-2 text-neutral-1 bg-primary-4 rounded-lg"
						>
							<MdAdd />
						</button>
					}
				>
					{
						({ onClose }) => (
							<CreateTaskForm onClose={onClose} />
						)
					}
				</Modal>
			</div>
		</div>
	)
}
