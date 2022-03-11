import { ErrorMessage, useField } from 'formik';

interface Props {
	name: string;
	type?: 'text' | 'email' | 'password' | 'date' | 'datetime-local' | 'time';
	placeholder?: string;
	[x: string]: any;
}

export const TextField = (props: Props) => {
	const [field, meta] = useField(props)
	return (
		<div className="w-full mb-6">
			<input
				className={
					`outline-none bg-neutral-3 border placeholder:text-neutral-2 border-primary-4 border-opacity-0 p-1 font-semibold text-neutral-1 rounded-md w-full ${meta.touched && meta.error && 'border-opacity-100'}`
				}
				{...field}
				{...props}
			/>
		</div>
	)
}
