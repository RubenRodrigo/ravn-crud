import { Task } from "../../interfaces/Task"
import { CardTag } from "../Card/CardTag"

import profile from '../../assets/images/profile.jpg'
import { CardDueDate } from "../Card/CardDueDate"

interface Props {
	task: Task,
}

export const ListCardItem = ({ task }: Props) => {
	return (
		<div className='w-full flex  bg-neutral-4 border-t border-neutral-3'>
			<div className='w-5/12 p-4'>
				<h3>{task.name}</h3>
			</div>
			<div className='w-2/12 p-4 border-x border-neutral-3 flex gap-2'>
				{
					task.tags.map((tag) => (
						<div key={tag}>

							<CardTag tag={tag} />
						</div>
					))
				}
			</div>
			<div className='w-1/12 p-4'>
				<h3>{task.pointEstimate} points</h3>
			</div>
			<div className='w-2/12 p-4 border-x border-neutral-3 flex gap-2'>
				<img
					className="rounded-full h-10 w-10 object-cover self-center"
					src={task.assignee?.avatar ?? profile}
					alt="Profile"
				/>
				<h3 className="self-center">{task.assignee?.fullName}</h3>
			</div>
			<div className='w-2/12 p-4'>
				<div className="flex justify-center">
					<CardDueDate dueDate={task.dueDate} />
				</div>
			</div>
		</div>
	)
}
