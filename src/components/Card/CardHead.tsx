import { useState } from 'react';
import { Task } from '../../interfaces/Task';
import { ActionButton } from '../Buttons/ActionButton';
import { DeleteTaskForm } from '../Forms/DeleteTaskForm';
import { UpdateTaskForm } from '../Forms/UpdateTaskForm';
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
					<ActionButton className='text-neutral-2' />
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
						<UpdateTaskForm task={task} onClose={onClose} />
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
