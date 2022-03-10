import { useEffect, useState } from "react"
import toast from 'react-hot-toast';

import { Task } from "../interfaces/Task"
import { getTask } from "../services/task"
import { BoardContainer } from "../components/Board/BoardContainer"
import { HeaderTasks } from "../components/HeaderTasks/HeaderTasks"
import { ToastContent } from "../components/Toast/ToastContent";

const INITIAL_STATE: Task[] = [
	{
		id: "1241",
		name: "Slack",
		tags: ['IOS', 'ANDROID'],
		status: "Working",
		position: 1,
		dueDate: new Date('2022-03-16T04:47:19.889Z'),
		pointEstimate: "0",
		createdAt: new Date('2022-03-08T16:04:47.453Z')
	}

]
export const HomePage = () => {

	const [tasks, setTasks] = useState<Task[]>(INITIAL_STATE)
	const [error, setError] = useState<string>()
	const [loading, setLoading] = useState<boolean>(false)

	const getData = async () => {
		setLoading(true)
		try {
			const res = await getTask()
			const data = res.data
			setTasks(data)
		} catch (error) {
			setError('We can\'t load the tasks.')
			toast.custom(
				<ToastContent status="error" msg="We can\'t load the tasks." />
			)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="text-white h-full flex flex-col w-full ">
			<HeaderTasks />
			<div className="flex-1">
				{error
					?
					<div>Something went wrong. Maybe is an 500 server error.</div>
					:
					<BoardContainer loading={loading} tasks={tasks} />
				}
			</div>
		</div>
	)
}
