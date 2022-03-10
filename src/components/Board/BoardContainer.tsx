import { useContext, useEffect, useState } from 'react'
import { groupBy } from '../../helpers/groupBy'
import { StatusTasks } from '../../interfaces/GroupBy'
import { Task } from '../../interfaces/Task'
import { BoardBody } from './BoardBody'
import { BoardHeader } from './BoardHeader'
import { CgSpinner } from "react-icons/cg";
import { TaskContext } from '../../context/TaskContext'

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
				<div className='w-full flex justify-center'>
					<CgSpinner className='animate-spin h-10 w-10 mr-3' />
				</div>
				:
				<>
					<BoardHeader statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
					<BoardBody statusTaskKeys={Object.keys(statusTasks)} statusTasks={statusTasks} />
				</>
			}
		</>
	)
}
