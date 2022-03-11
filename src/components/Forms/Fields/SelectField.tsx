import { ErrorMessage, useField } from 'formik';
import Select, {
	components,
	SingleValueProps,
	StylesConfig,
} from 'react-select';

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
			<Select
				isClearable={true}
				menuPortalTarget={document.querySelector('body')}
				hideSelectedOptions={false}
				onChange={handleChange}
				components={{ SingleValue }}
				styles={selectStyles}
				{...props}
				{...field}
			/>
			<ErrorMessage name={props.name} component="span" className="text-secondary" />
		</div >
	)
};

const SingleValue = ({ children, ...props }: SingleValueProps) => {
	// @ts-ignore
	return (
		<components.SingleValue {...props}>
			{children}
		</components.SingleValue>
	);
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
			maxHeight: '150px'
		}
	),
	option: (styles, { isDisabled, isFocused, isSelected }) => (
		{
			...styles,
			backgroundColor: isFocused ? 'rgb(38 38 38)' : 'rgb(82 82 82)',
			cursor: isDisabled ? 'not-allowed' : 'default',
			color: 'white',
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