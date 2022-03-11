import { MdAdd, MdOutlineDashboard, MdOutlineList } from "react-icons/md"
import { TasksLayout } from "../../interfaces/Layout"
import { CreateTaskForm } from "../Forms/CreateTaskForm"
import { Modal } from "../Modal/Modal"

interface Props {
	taskLayout: TasksLayout;
	handleTasksLayout: (layout: TasksLayout) => void;
}

export const HeaderTasks = ({ handleTasksLayout, taskLayout }: Props) => {

	return (
		<div className="flex justify-between text-xl my-3">
			<div className="flex rounded-lg">
				<button
					className={`p-2 rounded-lg self-center ${taskLayout === 'l' && 'text-primary-4 border-primary-4 border-2'}`}
					onClick={() => handleTasksLayout('l')}
				>
					<MdOutlineList />
				</button>
				<button
					className={`p-2 rounded-lg self-center ${taskLayout === 'b' && 'text-primary-4 border-primary-4 border-2'}`}
					onClick={() => handleTasksLayout('b')}
				>
					<MdOutlineDashboard
					/>
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
