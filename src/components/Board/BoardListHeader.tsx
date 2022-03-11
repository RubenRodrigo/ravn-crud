export const BoardListHeader = () => {
	return (
		<div className='w-full flex rounded-lg bg-neutral-4 border border-neutral-3 mb-4'>
			<div className='w-5/12 p-4'>
				<h3>#Task Name</h3>
			</div>
			<div className='w-2/12 p-4 border-x border-neutral-3'>
				<h3>Task Tags</h3>
			</div>
			<div className='w-1/12 p-4'>
				<h3>Estimate</h3>
			</div>
			<div className='w-2/12 p-4 border-x border-neutral-3'>
				<h3>Task Assign Name</h3>
			</div>
			<div className='w-2/12 p-4'>
				<h3>Due Date</h3>
			</div>
		</div>
	)
}

