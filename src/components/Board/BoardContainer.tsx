import { useContext, useEffect, useState } from 'react'
import { groupBy } from '../../helpers/groupBy'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'
import { BoardBody } from './BoardBody'
import { BoardHeader } from './BoardHeader'
import { CgSpinner } from "react-icons/cg";
import { TaskContext } from '../../context/TaskContext'
import { Spinner } from '../Spinner/Spinner'

interface Props {
	loading: boolean;
}
export const BoardContainer = ({ loading }: Props) => {

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
				<>
					<BoardHeader statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
					<BoardBody statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
				</>
			}
		</>
	)
}
