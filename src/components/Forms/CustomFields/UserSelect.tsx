import { useState } from 'react';
import { User } from '../../../interfaces/User';
import { getUserList } from '../../../services/user';
import { SelectField } from '../Fields/SelectField';

interface Props {
	label: string;
	name: string;
	placeholder?: string;
	[x: string]: any;
}

const getData = async (): Promise<User[]> => {
	try {
		const res = await getUserList()
		const data = res.data
		return data
	} catch (error) {
		console.log(error);
		return []
	}
}

export const UserSelect = (props: Props) => {

	const [options, setOptions] = useState<readonly User[]>([]);
	const [isLoading, setIsLoading] = useState(false)
	const [optionsLoaded, setOptionsLoaded] = useState(false)

	const handleLoadOptions = async () => {
		if (!optionsLoaded) {
			setIsLoading(true)
			try {
				const data = await getData()
				setOptions([...data])
				setOptionsLoaded(true)
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false)
			}
		}
	}

	return (
		<SelectField
			onBlurResetsInput={false}
			onCloseResetsInput={false}
			options={options}
			setOptions={setOptions}
			onFocus={handleLoadOptions}
			isLoading={isLoading}
			{...props}
		/>
	);
}