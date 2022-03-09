import React from 'react'
import { MdComment } from 'react-icons/md';
import { RiNodeTree } from 'react-icons/ri';

interface Props {
	profile: string;
	pointEstimate: string;
}

export const CardFooter = ({ pointEstimate, profile }: Props) => {
	return (
		<div className='flex justify-between'>
			<div className='flex-initial'>
				<img
					className="rounded-full h-10 w-10 object-cover"
					src={profile}
					alt="Profile"
				/>
			</div>
			<div className='flex-initial flex gap-4'>
				<div className='flex gap-2'>
					<span className='self-center' >
						{pointEstimate}
					</span>
					<span className='self-center' >
						<RiNodeTree />
					</span>
				</div>
				<div className='flex gap-2'>
					<span className='self-center' >
						{pointEstimate}
					</span>
					<span className='self-center' >
						<MdComment />
					</span>
				</div>
			</div>
		</div>
	)
}
