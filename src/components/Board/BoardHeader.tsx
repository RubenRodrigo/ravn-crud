import { useGridCols } from '../../hooks/useGridCols'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'

/**
 * This component is not bein used
 */
interface Props {
	statusTaskKeys: string[]
	statusTasks: StatusTasks<Task>
}
export const BoardHeader = ({ statusTaskKeys, statusTasks }: Props) => {
	const gridContainerRef = useGridCols(statusTaskKeys.length)

	return (
		<div
			ref={gridContainerRef}
			className={`grid gap-4 grid-flow-col sticky top-0 py-2 z-10 justify-between`}
		>
			{statusTaskKeys.map(key =>
				<div key={key} className="col-span-1 flex bg-neutral-5 ">
					<h1 className="flex-1 self-center font-semibold text-xl">{key} ({statusTasks[key].length})</h1>
				</div>
			)}
		</div>
	)
}
