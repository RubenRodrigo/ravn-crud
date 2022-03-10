import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'date' | 'datetime-local' | 'time';
	placeholder?: string;
	[x: string]: any;
}

export const TextField = ({ label, ...props }: Props) => {
	const [field] = useField(props)
	return (
		<div className="w-full mb-6">
			<label
				className='text-neutral-400'
				htmlFor={props.id || props.name}
			>
				{label}
			</label>
			<input
				className="outline-none p-2 mt-1 bg-neutral-800 font-semibold text-neutral-200 rounded-lg w-full"
				{...field}
				{...props}
			/>
			<ErrorMessage name={props.name} component="span" className="text-secondary" />
		</div>
	)
}
