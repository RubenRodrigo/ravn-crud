interface Props {
	children?: JSX.Element,
}

export const ListCardContainer = ({ children }: Props) => {
	return (
		<div className='w-full rounded-lg bg-neutral-4 border border-neutral-3 mb-4'>
			{children}
		</div>
	)
}
