import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import toast from 'react-hot-toast';

import { Tags, TaskBase } from '../../interfaces/Task'
import { createTask } from '../../services/task'
import { ToastContent } from '../Toast/ToastContent';
import { MultiSelectField } from './MultiSelectField';
import { TextField } from './TextField';
import { SelectField } from './SelectField';
import { StatusSelect, TagsSelect } from '../../interfaces/Selects';
import { getDateTime } from '../../helpers/dates';



const tags: TagsSelect[] = [
	{ id: 1, name: 'ANDROID' },
	{ id: 2, name: 'IOS' },
	{ id: 3, name: 'NODE_JS' },
	{ id: 4, name: 'RAILS' },
	{ id: 5, name: 'REACT' },
]

const status: StatusSelect[] = [
	{ id: 1, name: 'BACKLOG' },
	{ id: 2, name: 'TODO' },
	{ id: 3, name: 'IN_PROGRESS' },
	{ id: 4, name: 'CANCELLED' },
]

interface Props {
	onClose: () => void
}

export const CreateTaskForm = ({ onClose }: Props) => {

	const createTaskAction = async (task: TaskBase) => {
		try {
			const res = await createTask({ task })
			console.log(res);
			if (res.status === 201) {
				const data = res.data
				console.log(data);
				toast.custom(
					<ToastContent status="error" msg="We can\'t load the tasks." />
				)
			}

		} catch (error) {
			toast.custom(
				<ToastContent status="error" msg="We can\'t load the tasks." />
			)
		}
	}

	return (
		<Formik
			initialValues={{
				name: '',
				tags: [
					{ id: 1, name: 'ANDROID' },
				],
				status: { id: 1, name: 'BACKLOG' },
				pointEstimate: '',
				dueDate: getDateTime().today,
				dueTime: getDateTime().displayTime,
				assigneeId: ''
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.required('Required'),
				tags: Yup.array()
					.required('Required')
					.min(1, 'Cannot be empty')
					.of(
						Yup.object().shape({
							id: Yup.number()
								.notOneOf([0], 'No puede estar vacio')
								.required('Required'),
						})
					),
				status: Yup.object()
					.shape({
						id: Yup.number()
							.notOneOf([0], 'No puede estar vacio')
							.required('Required')
					}),
				pointEstimate: Yup.number()
					.oneOf([0, 1, 2, 4, 8], 'Only can be 0-1-2-4-8')
					.required('Required'),
				assigneeId: Yup.string()
					.required('Required'),
			})}
			onSubmit={(values) => {
				const datetime = new Date(`${values.dueDate}T${values.dueTime}`)
				const tagsValues = values.tags.map(tag => tag.name) as Tags[]
				const { dueTime, ...newValues } = values
				createTaskAction({ ...newValues, tags: tagsValues, status: newValues.status.name, dueDate: datetime })
				onClose();
			}}
		>
			{
				(forms) => (
					<Form autoComplete='off'>
						<div className="text-white">
							<h3
								className="text-2xl font-bold leading-6 mb-4"
							>
								Create new task
							</h3>
							<div className="mt-2">
								<TextField
									label='Name'
									name="name"
									placeholder="Task name"
								/>
								<MultiSelectField
									label='Tags'
									name="tags"
									getOptionLabel={(option: any) => option.name}
									getOptionValue={(option: any) => option.id}
									options={tags}
								/>
								<SelectField
									label='Status'
									name="status"
									getOptionLabel={(option: any) => option.name}
									getOptionValue={(option: any) => option.id}
									options={status}
								/>
								<TextField
									label='Point Estimated'
									name="pointEstimate"
									placeholder="Points"
								/>
								<TextField
									label='Due Date'
									name="dueDate"
									type='date'
									placeholder="Due date"
								/>
								<TextField
									label='Due Time'
									name="dueTime"
									type='time'
									placeholder="Due time. Opcional"
								/>
								<TextField
									label='Assigned to'
									name="assigneeId"
									placeholder="Select"
								/>
							</div>
							<div className="mt-4">
								<button
									type="submit"
									className="p-2 ripple__secondary rounded-lg"
								>
									Save Task
								</button>
							</div>
						</div>
					</Form>
				)
			}
		</Formik>
	)
}
