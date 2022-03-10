import { useGridCols } from '../../hooks/useGridCols'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'
import { ActionButton } from '../Buttons/ActionButton'

interface Props {
	statusTaskKeys: string[]
	statusTasks: StatusTasks<Task>
}
export const BoardHeader = ({ statusTaskKeys, statusTasks }: Props) => {
	const gridContainerRef = useGridCols(statusTaskKeys.length)

	return (
		<div
			ref={gridContainerRef}
			className={`grid gap-4 grid-flow-col sticky top-0 bg-neutral-800 py-2 z-10 w-full`}
		>
			{statusTaskKeys.map(key =>
				<div key={key} className="col-span-1 flex">
					<h1 className="flex-1 self-center font-semibold text-xl">{key} ({statusTasks[key].length})</h1>
					<ActionButton className="text-gray-500" />
				</div>
			)}
		</div>
	)
}
