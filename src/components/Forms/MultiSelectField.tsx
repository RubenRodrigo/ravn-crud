import { ErrorMessage, useField } from 'formik';
import React from 'react';

import Select, { MultiValue, StylesConfig } from 'react-select';
import { Tags } from '../../interfaces/Task';

interface Props {
	label: string;
	name: string;
	[x: string]: any;
}

export const MultiSelectField = ({ label, ...props }: Props) => {

	const [{ onChange, ...field }, meta, helpers] = useField(props)

	const handleChange = (newValue: MultiValue<Tags>) => {
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
				isMulti
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
	option: (styles, { isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
			backgroundColor: isFocused ? 'rgb(38 38 38)' : 'rgb(82 82 82)',
			color: '#ccc',
			cursor: isDisabled ? 'not-allowed' : 'default',
		};
	},
};