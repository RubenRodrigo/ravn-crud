import { MdMoreHoriz } from 'react-icons/md'

interface Props {
	children?: JSX.Element,
}

export const ActionButton = ({ children }: Props) => {
	return (
		<>
			<button className='flex-initial'>
				<MdMoreHoriz className='w-6 h-6' />
			</button>
			{children}
		</>
	)
}
