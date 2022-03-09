import { ActionButton } from '../Buttons/ActionButton';

interface Props {
	name: string;
}

export const CardHead = ({ name }: Props) => {
	return (
		<div className='flex'>
			<h1 className='flex-1 font-semibold'>{name}</h1>
			<ActionButton />
		</div>
	)
}
