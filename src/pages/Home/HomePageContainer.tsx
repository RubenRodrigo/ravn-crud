import { useCallback, useContext, useEffect, useState } from "react"
import toast from 'react-hot-toast';

import { getTask } from "../../services/task"
import { BoardContainer } from "../../components/Board/BoardContainer"
import { HeaderTasks } from "../../components/HeaderTasks/HeaderTasks"
import { ToastContent } from "../../components/Toast/ToastContent";
import { TaskContext } from "../../context/TaskContext";

export const HomePageContainer = () => {

	const { taskLoaded } = useContext(TaskContext)
	const [error, setError] = useState<string>()
	const [loading, setLoading] = useState<boolean>(false)


	const getData = useCallback(async () => {
		setLoading(true)
		try {
			const res = await getTask()
			const data = res.data
			taskLoaded(data)
		} catch (error) {
			setError('We can\'t load the tasks.')
			toast.custom(
				<ToastContent status="error" msg="We can\'t load the tasks." />
			)
		} finally {
			setLoading(false)
		}
	}, [taskLoaded])

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
					<BoardContainer loading={loading} />
				}
			</div>
		</div>
	)
}
