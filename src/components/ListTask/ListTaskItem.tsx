import { Task } from '../../interfaces/Task'

import profile from '../../assets/images/profile.jpg'

interface Props {
	task: Task
}

export const ListTaskItem = ({ task }: Props) => {
	return (
		<div className='w-full flex gap-4 p-4 hover:bg-neutral-600 hover:cursor-pointer'>
			<div className='flex-initial self-center'>
				<img
					className="rounded-full h-10 w-10 object-cover"
					src={task.assignee?.avatar ?? profile}
					alt="Profile"
				/>
			</div>
			<div className='flex-1'>
				<p>{task.name}</p>
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
			</div>
		</div>
	)
}
