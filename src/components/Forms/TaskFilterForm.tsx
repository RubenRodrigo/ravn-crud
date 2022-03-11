
import { Form, Formik } from 'formik'
import { status, tags } from '../../helpers/data'
import { isValidDate } from '../../helpers/dates'

import { SearchTask, Tags, TaskFormFilterValues } from '../../interfaces/Task'
import { MultiSelectField } from './MultiSelectField'
import { SelectField } from './SelectField'
import { TextField } from './TextField'


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
					dueDate: isValidDate(datetime) ? datetime.toISOString() : ''
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
								<TextField
									label='Created By'
									name="creatorId"
									placeholder="Select"
								/>
							</div>
							<div className="mt-4">
								<button
									type="submit"
									className="p-2 ripple__secondary rounded-lg"
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
