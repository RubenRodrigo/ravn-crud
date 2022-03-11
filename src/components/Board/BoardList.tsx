import { StatusTasks } from '../../interfaces/GroupBy'
import { Status, Task } from '../../interfaces/Task'
import { ListCardBody } from '../ListCard/ListCardBody'
import { ListCardContainer } from '../ListCard/ListCardContainer'
import { ListCardHeader } from '../ListCard/ListCardHeader'
import { ListCardItem } from '../ListCard/ListCardItem'
import { BoardListHeader } from './BoardListHeader'

interface Props {
	statusTasks: StatusTasks<Task>
	statusTaskKeys: string[]
}
export const BoardList = ({ statusTasks, statusTaskKeys }: Props) => {
	return (
		<div className='w-full'>
			<BoardListHeader />
			{statusTaskKeys.map(key => (
				<ListCardContainer key={key}>
					<>
						<ListCardHeader status={key as Status} length={statusTasks[key].length} />
						{statusTasks[key].map((task, index) => (
							<ListCardItem
								key={task.id}
								task={task}
							/>
						))}
					</>
				</ListCardContainer>
			))}
		</div>
	)
}
