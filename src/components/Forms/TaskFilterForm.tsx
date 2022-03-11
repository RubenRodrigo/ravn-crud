
import { Form, Formik } from 'formik'
import { point, status, tags } from '../../helpers/data'
import { isValidDate } from '../../helpers/dates'

import { SearchTask, Tags, TaskFormFilterValues } from '../../interfaces/Task'
import { UserSelect } from './CustomFields/UserSelect'
import { MultiSelectField } from './Fields/MultiSelectField'
import { SelectField } from './Fields/SelectField'
import { TextField } from './Fields/TextField'


interface Props {
	saveTask: (task: SearchTask) => void
	INITIAL_VALUES: TaskFormFilterValues
	onClose: () => void
}

export const TaskFilterForm = ({ saveTask, INITIAL_VALUES, onClose }: Props) => {
	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={(values) => {
				const datetime = new Date(`${values.dueDate}T${values.dueTime}`)
				const tagsValues = values.tags.map(tag => tag.name) as Tags[]
				const { dueTime, ...newValues } = values
				saveTask({
					...newValues,
					tags: tagsValues,
					status: newValues.status?.name ?? '',
					dueDate: isValidDate(datetime) ? datetime.toISOString() : '',
					assigneeId: newValues.assigneeId?.id ?? '',
					creatorId: newValues.creatorId?.id ?? '',
				})
				onClose()
			}}
		>
			{
				(forms) => (
					<Form autoComplete='off'>
						<div className="text-white p-6">
							<h3
								className="text-2xl font-bold leading-6 mb-4"
							>
								Filter Tasks
							</h3>
							<div className="mt-2">
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
								<UserSelect
									label='Created by'
									name="creatorId"
									placeholder="Created by"
									getOptionLabel={(option: any) => option.fullName}
									getOptionValue={(option: any) => option.id}
								/>
							</div>
							<div className="mt-4">
								<button
									type="submit"
									className="p-2 bg-primary-4 rounded-lg"
								>
									Filter Tasks
								</button>
							</div>
						</div>
					</Form>
				)
			}
		</Formik>
	)
}
