import { useState } from 'react';
import { Task } from '../../interfaces/Task';
import { ActionButton } from '../Buttons/ActionButton';
import { CreateTaskForm } from '../Forms/CreateTaskForm';
import { DeleteTaskForm } from '../Forms/DeleteTaskForm';
import { CustomMenu } from '../Menu/CustomMenu';
import { Modal } from '../Modal/Modal';
import { CardMenu } from './CardMenu';

interface Props {
	task: Task;
}

export const CardHead = ({ task }: Props) => {

	const [isOpenEdit, setIsOpenEdit] = useState(false)
	const [isOpenDelete, setIsOpenDelete] = useState(false)

	function closeModalEdit() {
		setIsOpenEdit(false)
	}

	function openModalEdit() {
		setIsOpenEdit(true)
	}

	function closeModalDelete() {
		setIsOpenDelete(false)
	}

	function openModalDelete() {
		setIsOpenDelete(true)
	}

	return (
		<div className='flex'>
			<h1 className='flex-1 font-semibold'>{task.name}</h1>
			<CustomMenu
				width='w-36'
				menuButton={
					<ActionButton />
				}
			>
				<CardMenu task={task} openEdit={openModalEdit} openDelete={openModalDelete} />
			</CustomMenu>
			<Modal
				className="bg-neutral-700"
				OnIsOpen={isOpenEdit}
				onCloseModal={closeModalEdit}
				onOpenModal={openModalEdit}
			>
				{
					({ onClose }) => (
						<CreateTaskForm onClose={onClose} />
					)
				}
			</Modal>
			<Modal
				className="bg-neutral-700"
				OnIsOpen={isOpenDelete}
				onCloseModal={closeModalDelete}
				onOpenModal={openModalDelete}
			>
				{
					({ onClose }) => (
						<DeleteTaskForm onClose={onClose} id={task.id} />
					)
				}
			</Modal>
		</div>
	)
}
