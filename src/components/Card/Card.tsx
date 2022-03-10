import { Task } from '../../interfaces/Task'
import { CardImage } from './CardImage';
import { CardHead } from './CardHead';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

interface Props {
	task: Task;
	imageURL?: string
}

export const Card = ({ task, imageURL }: Props) => {
	return (
		<div className='my-4 bg-primary p-4 rounded-lg'>
			<div className='flex flex-col gap-5'>
				{imageURL && <CardImage imageURL={imageURL} name={task.name} />}
				<CardHead task={task} />
				<CardBody task={task} />
				<CardFooter task={task} />
			</div>
		</div>
	)
}
