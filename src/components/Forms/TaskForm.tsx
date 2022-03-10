
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { status, tags } from '../../helpers/data'

import { Tags, TaskBase, TaskFormValues } from '../../interfaces/Task'
import { Spinner } from '../Spinner/Spinner'
import { MultiSelectField } from './MultiSelectField'
import { SelectField } from './SelectField'
import { TextField } from './TextField'


interface Props {
	saveTask: (task: TaskBase) => Promise<void>
	loading: boolean,
	INITIAL_VALUES: TaskFormValues
}

export const TaskForm = ({ saveTask, loading, INITIAL_VALUES }: Props) => {
	return (
		<Formik
			initialValues={INITIAL_VALUES}
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
				saveTask({ ...newValues, tags: tagsValues, status: newValues.status.name, dueDate: datetime })
			}}
		>
			{
				(forms) => (
					<Form autoComplete='off'>
						<div className="text-white p-6">
							{
								loading &&
								<div className='absolute w-full top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-50'>
									<Spinner wd={20} hg={20} />
								</div>
							}
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
