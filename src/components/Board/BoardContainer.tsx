import { useContext, useEffect, useState } from 'react'
import { groupBy } from '../../helpers/groupBy'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'
import { BoardBody } from './BoardBody'
import { TaskContext } from '../../context/TaskContext'
import { Spinner } from '../Spinner/Spinner'
import { TasksLayout } from '../../interfaces/Layout'
import { BoardList } from './BoardList'

interface Props {
	loading: boolean;
	taskLayout: TasksLayout
}
export const BoardContainer = ({ loading, taskLayout }: Props) => {

	const { taskState: { tasks } } = useContext(TaskContext)
	const [statusTasks, setStatusTasks] = useState<StatusTasks<Task>>(groupBy(tasks, 'status'))

	useEffect(() => {
		setStatusTasks(groupBy(tasks, 'status'));
	}, [tasks])

	return (
		<>
			{loading
				?
				<Spinner />
				:
				<div>
					{
						taskLayout === 'b' ?

							<BoardBody statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
							:
							<BoardList statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
					}
				</div>
			}
		</>
	)
}
