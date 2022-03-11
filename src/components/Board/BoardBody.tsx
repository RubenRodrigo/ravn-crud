import { useGridCols } from '../../hooks/useGridCols'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'
import { Card } from '../Card/Card'
import taskIMG from '../../assets/images/task-image.jpg'

interface Props {
	statusTasks: StatusTasks<Task>
	statusTaskKeys: string[]
}

export const BoardBody = ({ statusTasks, statusTaskKeys }: Props) => {

	const gridContainerRef = useGridCols(statusTaskKeys.length)
	return (
		<div
			className={`grid gap-4 h-full grid-flow-col justify-between overflow-x-auto`}
			ref={gridContainerRef}
		>
			{statusTaskKeys.map(key => (
				<div key={key} className="col-span-1 bg-neutral-5">
					<h1 className="flex-1 self-center font-semibold text-xl">{key} ({statusTasks[key].length})</h1>
					{statusTasks[key].map((task, index) => (
						<Card
							key={task.id}
							task={task}
							{...(index % 2 === 0 && { imageURL: taskIMG })}
						/>
					))}
				</div>
			))}
		</div>
	)
}
