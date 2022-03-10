import { TaskProvider } from "../../providers/TaskProvider"
import { TaskState } from "../../reducer/interfaces"
import { HomePageContainer } from "./HomePageContainer"


const INITIAL_STATE: TaskState = {
	tasks: [
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

	],
	currentTask: null
}
export const HomePage = () => {
	return (
		<TaskProvider INITIAL_STATE={INITIAL_STATE}>
			<HomePageContainer />
		</TaskProvider>
	)
}
