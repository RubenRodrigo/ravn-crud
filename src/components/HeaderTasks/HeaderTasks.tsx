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
			<div className="flex bg-neutral-600 bg-opacity-40 rounded-lg">
				<button className="p-2 rounded-lg self-center">
					<MdOutlineList />
				</button>
				<button className="p-2 bg-red-100 text-secondary border-red-700 border-2 rounded-lg">
					<MdOutlineDashboard />
				</button>
			</div>
			<div>
				<Modal
					className="bg-neutral-700"
					openButton={(open) =>
						<button
							onClick={open}
							className="p-2 ripple__secondary rounded-lg"
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
