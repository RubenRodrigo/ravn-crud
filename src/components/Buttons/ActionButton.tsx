import { MdMoreHoriz } from 'react-icons/md'

interface Props {
	children?: JSX.Element,
	className?: string
}

export const ActionButton = ({ children, className }: Props) => {
	return (
		<>
			<button className={`flex-initial ${className}`}>
				<MdMoreHoriz className='w-6 h-6' />
			</button>
			{children}
		</>
	)
}
