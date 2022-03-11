import { useCallback, useContext, useEffect, useState } from "react"
import toast from 'react-hot-toast';

import { searchTask } from "../../services/task"
import { BoardContainer } from "../../components/Board/BoardContainer"
import { HeaderTasks } from "../../components/HeaderTasks/HeaderTasks"
import { ToastContent } from "../../components/Toast/ToastContent";
import { TaskContext } from "../../context/TaskContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { TasksLayout } from "../../interfaces/Layout";

export const HomePageContainer = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams();
	const { taskLoad } = useContext(TaskContext)

	const [taskLayout, setTaskLayout] = useState<TasksLayout>('b')
	const [error, setError] = useState<string>()
	const [loading, setLoading] = useState<boolean>(false)

	const getData = useCallback(async (searchParams: URLSearchParams) => {
		setLoading(true)
		try {
			const res = await searchTask(searchParams)
			const data = res.data
			taskLoad(data)
		} catch (error) {
			console.log(error);
			setError('We can\'t load the tasks.')
			toast.custom(
				<ToastContent status="error" msg="We can\'t load the tasks." />
			)
		} finally {
			setLoading(false)
		}
	}, [taskLoad])

	useEffect(() => {
		getData(searchParams)
	}, [searchParams])

	const handleTasksLayout = (layout: TasksLayout) => {
		setTaskLayout(layout)
	}

	return (
		<>
			{
				searchParams.toString().length > 0
					?
					<button
						onClick={() => navigate('/')}
						className="bg-neutral-3 rounded-lg px-2 py-1 text-neutral-1"
					>
						<MdArrowBack className="w-6 h-6" />
					</button>
					:
					<></>
			}
			<div className="text-neutral-1 h-full flex flex-col w-full ">
				<HeaderTasks
					taskLayout={taskLayout}
					handleTasksLayout={handleTasksLayout}
				/>
				<div className="flex-1">
					{error
						?
						<div>Something went wrong. Maybe is an 500 server error.</div>
						:
						<BoardContainer loading={loading} taskLayout={taskLayout} />
					}
				</div>
			</div>
		</>
	)
}
