import { useState } from "react"
import { MdAlarm, MdAlarmOn, MdPause } from "react-icons/md"
import { getDelayDate } from "../../helpers/dates"
import { Task } from "../../interfaces/Task"

interface Props {
	task: Task
}

export const CardBody = ({ task }: Props) => {
	return (
		<>
			<div className='flex justify-between'>
				<div className='flex gap-2 text-sm font-medium pl-2 py-1 pr-1 bg-neutral-600 bg-opacity-40 rounded-md'>
					<span className='self-center'>
						<MdAlarmOn />
					</span>
					<div className='self-center'>
						<span className='text-green-300'>
							1:30
						</span>
						/
						<span>
							2:40
						</span>
					</div>
					<span className='self-center bg-secondary rounded-sm p-1'>
						<MdPause />
					</span>
				</div>
				<div className='flex gap-2 text-sm py-0.5 px-3 font-medium bg-neutral-600 bg-opacity-40 rounded-md'>
					<span className='self-center'>
						<MdAlarm />
					</span>
					<span className='self-center'>
						<CardDueDate dueDate={task.dueDate} />
					</span>
				</div>
			</div>
			<div className='flex gap-4'>
				{
					task.tags.map(tag => (
						<span
							key={tag}
							className='py-1.5 px-4  text-green-200 bg-green-500 bg-opacity-10 rounded-md text-xs'
						>
							{tag}
						</span>
					))
				}
			</div>
		</>
	)
}
interface CardDueDateProps {
	dueDate: Date
}
const CardDueDate = ({ dueDate }: CardDueDateProps) => {
	const [delayDate] = useState(getDelayDate(dueDate))

	if (delayDate >= 0) {
		return (
			<span className="text-green-300">
				{delayDate === 0 ? 'Today' : `In ${delayDate} days.`}
			</span>
		)
	}
	if (delayDate >= -2) {
		return (
			<span className="text-yellow-200">
				{delayDate} days ago.
			</span>
		)
	}
	return (
		<span className="text-secondary">
			{delayDate} days ago.
		</span>
	)

}