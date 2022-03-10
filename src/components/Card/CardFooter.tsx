import { MdComment } from 'react-icons/md';
import { RiNodeTree } from 'react-icons/ri';
import { Task } from '../../interfaces/Task';

import profile from '../../assets/images/profile.jpg'

interface Props {
	task: Task;
}

export const CardFooter = ({ task }: Props) => {
	return (
		<div className='flex justify-between'>
			<div className='flex-initial'>
				<img
					className="rounded-full h-10 w-10 object-cover"
					src={task.assignee?.avatar ?? profile}
					alt="Profile"
				/>
			</div>
			<div className='flex-initial flex gap-4'>
				<div className='flex gap-2'>
					<span className='self-center' >
						{task.pointEstimate}
					</span>
					<span className='self-center' >
						<RiNodeTree />
					</span>
				</div>
				<div className='flex gap-2'>
					<span className='self-center' >
						{task.pointEstimate}
					</span>
					<span className='self-center' >
						<MdComment />
					</span>
				</div>
			</div>
		</div>
	)
}
