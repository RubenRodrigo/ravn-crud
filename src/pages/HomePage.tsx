import { Task } from "../interfaces/Task"
import { ActionButton } from "../components/Buttons/ActionButton"
import { Card } from "../components/Card/Card"
import { HeaderTasks } from "../components/HeaderTasks/HeaderTasks"

import taskImage from '../assets/images/task-image.jpg'

const INITAL_STATE: Task = {
	id: "1241",
	name: "Slack",
	tags: ['IOS APP', 'ANDROID'],
	status: "Working",
	position: 1,
	dueDate: new Date('2022-03-16T04:47:19.889Z'),
	pointEstimate: "0",
	createdAt: new Date('2022-03-08T16:04:47.453Z')
}

export const HomePage = () => {
	return (
		<div className="text-white h-full flex flex-col w-full">
			<HeaderTasks />
			<div className="grid grid-cols-3 gap-4 sticky top-0 bg-neutral-800 py-2 z-10 ">
				<div className="flex">
					<h1 className="flex-1 self-center font-semibold text-xl">Working (03)</h1>
					<ActionButton />
				</div>
				<div className="flex">
					<h1 className="flex-1 self-center font-semibold text-xl">Working (03)</h1>
					<ActionButton />
				</div>
				<div className="flex">
					<h1 className="flex-1 self-center font-semibold text-xl">Working (03)</h1>
					<ActionButton />
				</div>
			</div>
			<div className="flex-1">
				<div
					className="grid grid-cols-3 gap-4 h-full grid-flow-col w-full"
				>
					<div>
						<Card task={INITAL_STATE} imageURL={taskImage} />
						<Card task={INITAL_STATE} />
					</div>
					<div>
						<Card task={INITAL_STATE} />
					</div>
					<div>
						<Card task={INITAL_STATE} />
						<Card task={INITAL_STATE} />
					</div>
				</div>
			</div>
		</div>
	)
}
