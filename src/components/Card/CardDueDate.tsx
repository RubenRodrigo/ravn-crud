import { useState } from "react"
import { MdAlarm } from "react-icons/md"
import { getDelayDate } from "../../helpers/dates"

interface CardDueDateProps {
	dueDate: Date
}

export const CardDueDate = ({ dueDate }: CardDueDateProps) => {
	const [delayDate] = useState(getDelayDate(dueDate))

	if (delayDate >= 0) {
		return (
			<div className='flex gap-2 text-sm py-0.5 px-3 font-medium bg-neutral-1 bg-opacity-10 rounded-md'>
				<span className='self-center'>
					<MdAlarm />
				</span>
				<span className='self-center'>
					<span className="text-neutral-1">
						{delayDate === 0 ? 'Today' : `In ${delayDate} days.`}
					</span>
				</span>
			</div>
		)
	}
	if (delayDate >= -2) {
		return (
			<div className='flex gap-2 text-sm py-0.5 px-3 font-medium bg-tertiary-4 bg-opacity-10 rounded-md'>
				<span className='self-center'>
					<MdAlarm />
				</span>
				<span className='self-center'>
					<span className="text-tertiary-4">
						{delayDate} days ago.
					</span>
				</span>
			</div>
		)
	}
	return (
		<div className='flex gap-2 text-sm py-0.5 px-3 font-medium bg-primary-4 bg-opacity-10 rounded-md'>
			<span className='self-center'>
				<MdAlarm />
			</span>
			<span className='self-center'>
				<span className="text-primary-4">
					{delayDate} days ago.
				</span>
			</span>
		</div>
	)

}