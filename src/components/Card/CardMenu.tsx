import { MdDelete, MdEdit } from 'react-icons/md'
import { Task } from '../../interfaces/Task';

interface Props {
	task: Task;
	openEdit: () => void
	openDelete: () => void
}

export const CardMenu = ({ task, openEdit, openDelete }: Props) => {
	return (
		<>
			<button
				className='flex gap-2 p-0.5 hover:bg-green-600 hover:bg-opacity-20 rounded-lg w-full'
				onClick={openEdit}
			>
				<div className='flex-initial self-center'>
					<MdEdit />
				</div>
				<div className='flex-1 self-center text-left'>
					Edit task.
				</div>
			</button>
			<button
				className='flex gap-2 p-0.5 hover:bg-red-600 hover:bg-opacity-20 rounded-lg w-full'
				onClick={openDelete}
			>
				<div className='flex-initial self-center'>
					<MdDelete />
				</div>
				<div className='flex-1 self-center text-left'>
					Delete task.
				</div>
			</button>
		</>
	)
}
