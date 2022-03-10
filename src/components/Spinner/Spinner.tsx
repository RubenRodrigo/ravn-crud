import React from 'react'
import { CgSpinner } from 'react-icons/cg'

interface Props {
	wd?: number;
	hg?: number
}

export const Spinner = ({ wd = 10, hg = 10 }: Props) => {
	return (
		<div className='w-full flex justify-center h-full'>
			<CgSpinner className={`self-center animate-spin h-${wd} w-${hg} mr-3`} />
		</div>
	)
}
