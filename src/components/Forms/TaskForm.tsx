
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { point, status, tags } from '../../helpers/data'

import { Tags, TaskBase, TaskFormValues } from '../../interfaces/Task'
import { Spinner } from '../Spinner/Spinner'
import { UserSelect } from './CustomFields/UserSelect'
import { MultiSelectField } from './Fields/MultiSelectField'
import { SelectField } from './Fields/SelectField'
import { TextField } from './Fields/TextField'


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
								.notOneOf([0], 'Cannot be empty')
								.required('Required'),
						})
					),
				status: Yup.object()
					.required('Choose one')
					.shape({
						id: Yup.number()
							.notOneOf([0], 'Cannot be empty')
							.required('Required')
					})
					.nullable(),
				pointEstimate: Yup.object()
					.required('Choose one')
					.shape({
						id: Yup.number()
							.notOneOf([0], 'Cannot be empty')
							.required('Required')
					})
					.nullable(),
				assigneeId: Yup.object()
					.required('Choose one')
					.shape({
						id: Yup.string()
							.required('Required')
					})
					.nullable(),
			})}
			onSubmit={(values) => {
				const datetime = new Date(`${values.dueDate}T${values.dueTime}`)
				const tagsValues = values.tags.map(tag => tag.name) as Tags[]
				const { dueTime, ...newValues } = values
				console.log(values);
				saveTask({
					...newValues,
					tags: tagsValues,
					status: newValues.status?.name ?? 'CANCELLED',
					pointEstimate: newValues.pointEstimate?.name ?? '0',
					assigneeId: newValues.assigneeId?.id,
					dueDate: datetime
				})
			}}
		>
			{
				(forms) => (
					<Form autoComplete='off'>
						<div className="text-white p-4">
							{
								loading &&
								<div className='absolute w-full top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-50'>
									<Spinner wd={20} hg={20} />
								</div>
							}
							<TextField
								name="name"
								placeholder="Task title"
							/>
							<div className='flex gap-2'>
								<MultiSelectField
									label='Tags'
									name="tags"
									placeholder="Tags"
									getOptionLabel={(option: any) => option.name}
									getOptionValue={(option: any) => option.id}
									options={tags}
								/>
								<SelectField
									label='Status'
									name="status"
									placeholder="Status"
									getOptionLabel={(option: any) => option.name}
									getOptionValue={(option: any) => option.id}
									options={status}
								/>
								<SelectField
									label='Estimated'
									name="pointEstimate"
									placeholder="Estimated"
									getOptionLabel={(option: any) => option.name.toString()}
									getOptionValue={(option: any) => option.id}
									options={point}
								/>
							</div>
							<div className='flex gap-2'>
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
							</div>
							<UserSelect
								label='Assigned to'
								name="assigneeId"
								placeholder="Assigned to"
								getOptionLabel={(option: any) => option.fullName}
								getOptionValue={(option: any) => option.id}
							/>
							<div className="mt-4">
								<button
									type="submit"
									className="p-2 bg-primary-4 text-neutral-1 rounded-lg"
								>
									Save Task
								</button>
							</div>
						</div>
					</Form>
				)
			}
		</Formik >
	)
}
