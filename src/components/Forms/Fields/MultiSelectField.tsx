import { ErrorMessage, useField } from 'formik';

import Select, { MultiValue, StylesConfig } from 'react-select';
import { Tags } from '../../../interfaces/Task';

interface Props {
	label: string;
	name: string;
	[x: string]: any;
}

export const MultiSelectField = ({ label, ...props }: Props) => {

	const [{ onChange, ...field }, _, helpers] = useField(props)

	const handleChange = (newValue: MultiValue<Tags>) => {
		helpers.setValue(newValue)
	}

	return (
		<div className="w-full mb-6">
			<Select
				isMulti
				menuPortalTarget={document.querySelector('body')}
				hideSelectedOptions={false}
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
	menuPortal: (styles) => ({
		...styles,
		zIndex: 1000
	}),
	menu: (styles) => ({
		...styles,
		zIndex: 1000
	}),
	control: (styles) => (
		{
			...styles,
			backgroundColor: 'none',
			border: 'none',
			boxShadow: 'none',
			'&:hover': {
				backgroundColor: 'rgba(148, 151, 154, 0.1)',
			}
		}
	),
	menuList: (styles) => (
		{
			...styles,
			backgroundColor: 'rgb(38 38 38)',
			maxHeight: '170px'
		}
	),
	option: (styles, { isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
			backgroundColor: isFocused ? 'rgb(38 38 38)' : 'rgb(82 82 82)',
			color: '#ccc',
			cursor: isDisabled ? 'not-allowed' : 'default',
		};
	},
};