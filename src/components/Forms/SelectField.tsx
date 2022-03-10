import { ErrorMessage, useField } from 'formik';
import Select, { StylesConfig } from 'react-select';

interface Props {
	label: string;
	name: string;
	[x: string]: any;
}

export const SelectField = ({ label, ...props }: Props) => {

	const [{ onChange, ...field }, _, helpers] = useField(props)

	const handleChange = (newValue: any) => {
		helpers.setValue(newValue)
	}

	return (
		<div className="w-full mb-6">
			<label
				className='text-neutral-400'
				htmlFor={props.id || props.name}
			>
				{label}
			</label>
			<Select
				onChange={handleChange}
				styles={selectStyles}
				{...props}
				{...field}
			/>
			<ErrorMessage name={props.name} component="span" className="text-secondary" />
		</div >
	)
};

const selectStyles: StylesConfig = {
	control: (styles) => (
		{
			...styles,
			backgroundColor: 'rgb(38 38 38)',
			border: 'none',
			boxShadow: 'none'
		}
	),
	menuList: (styles) => (
		{
			...styles,
			backgroundColor: 'rgb(38 38 38)',
		}
	),
	option: (styles, { isDisabled, isFocused, isSelected }) => (
		{
			...styles,
			backgroundColor: isFocused ? 'rgb(38 38 38)' : 'rgb(82 82 82)',
			cursor: isDisabled ? 'not-allowed' : 'default',
		}
	),
	singleValue: (styles, state) => (
		{
			...styles,
			color: 'white',
			fontStyle: 'bold'
		}
	)
};