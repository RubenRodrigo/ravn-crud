import { MdSearch } from "react-icons/md";
export const SearchNav = () => {
	return (
		<div className="flex-1 flex gap-4">
			<div className="flex-initial self-center">
				<MdSearch />
			</div>
			<div className="flex-1 self-center">
				<input
					placeholder="Search a task"
					type="text"
					className='bg-transparent w-full focus:outline-none'
				/>
			</div>
		</div>
	)
}
