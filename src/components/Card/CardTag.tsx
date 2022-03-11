import { Tags } from "../../interfaces/Task"


interface CardTagProps {
	tag: Tags
}

export const CardTag = ({ tag }: CardTagProps) => {

	switch (tag) {
		case 'IOS':
			return (
				<span
					className='py-1.5 px-4 text-secondary-4 bg-secondary-4 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)

		case 'ANDROID':
			return (
				<span
					className='py-1.5 px-4 text-tertiary-4 bg-tertiary-4 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)

		case 'NODE_JS':
			return (
				<span
					className='py-1.5 px-4 text-neutral-1 bg-neutral-1 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)

		case 'REACT':
			return (
				<span
					className='py-1.5 px-4 text-blue-600 bg-blue-600 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)

		case 'RAILS':
			return (
				<span
					className='py-1.5 px-4 text-primary-4 bg-primary-4 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)

		default:
			return (
				<span
					className='py-1.5 px-4 text-neutral-3 bg-ntext-neutral-3 bg-opacity-10 rounded-md text-xs'
				>
					{tag}
				</span>
			)
	}

}