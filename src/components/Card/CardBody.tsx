import { MdAlarmOn, MdPause } from "react-icons/md"
import { Task } from "../../interfaces/Task"
import { CardDueDate } from "./CardDueDate"
import { CardTag } from "./CardTag"

interface Props {
	task: Task
}

export const CardBody = ({ task }: Props) => {
	return (
		<>
			<div className='flex justify-between'>
				<div className='flex gap-2 text-sm font-medium pl-2 py-1 pr-1 bg-neutral-1 bg-opacity-10 rounded-md'>
					<span className='self-center'>
						<MdAlarmOn />
					</span>
					<div className='self-center'>
						<span className='text-secondary-4'>
							1:30
						</span>
						/
						<span>
							2:40
						</span>
					</div>
					<span className='self-center text-neutral-1 bg-neutral-3 rounded-sm p-1'>
						<MdPause />
					</span>
				</div>
				<CardDueDate dueDate={task.dueDate} />
			</div>
			<div>
				{task.pointEstimate} Points
			</div>
			<div className='flex gap-4'>
				{
					task.tags.map(tag => (
						<CardTag key={tag} tag={tag} />
					))
				}
			</div>
		</>
	)
}

