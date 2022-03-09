import { MdAlarm, MdAlarmOn, MdPause } from "react-icons/md"

interface Props {
	tags: string[]
}

export const CardBody = ({ tags }: Props) => {
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
						Today
					</span>
				</div>
			</div>
			<div className='flex gap-4'>
				{
					tags.map(tag => (
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
