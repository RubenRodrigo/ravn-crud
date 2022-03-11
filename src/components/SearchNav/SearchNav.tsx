import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { getSearchQuery } from "../../helpers/query";
import { useDebounce } from "../../hooks/useDebounce";
import { Task } from "../../interfaces/Task";
import { searchTask } from "../../services/task";
import { ListTaskItem } from "../ListTask/ListTaskItem";
import { SearchNavSkeleton } from "../Skeleton/SearchNavSkeleton";
import { SearchFilter } from "./SearchFilter";

export const SearchNav = () => {
	// State and setters for ...
	// Search term
	const [searchTerm, setSearchTerm] = useState<string>("");
	// API search results
	const [results, setResults] = useState<Task[]>([]);
	// Searching status (whether there is pending API request)
	const [isSearching, setIsSearching] = useState<boolean>(false);
	// Debounce search term so that it only gives us latest value ...
	// ... if searchTerm has not been updated within last 500ms.
	// The goal is to only have the API call fire when user stops typing ...
	// ... so that we aren't hitting our API rapidly.
	// We pass generic type, this case string
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 1000);

	// Effect for API call
	useEffect(
		() => {
			if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
				setIsSearching(true);
				searchTasksAction(debouncedSearchTerm).then((results) => {
					setIsSearching(false);
					setResults(results);
				});
			} else {
				setResults([]);
			}
		},
		[debouncedSearchTerm] // Only call effect if debounced search term changes
	);

	return (
		<>
			<div className="flex-1 flex gap-4 ">
				<div className="flex-initial self-center">
					<MdSearch />
				</div>
				<div className="flex-1 self-center">
					<input
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
						value={searchTerm}
						placeholder="Search a task"
						type="text"
						className='bg-transparent w-full focus:outline-none'
					/>
				</div>
				<div className="flex-initial self-center flex">
					<SearchFilter />
				</div>
			</div>
			<div className="absolute bg-neutral-4 w-full left-0 right-0 top-16 rounded-lg z-20 max-h-72 overflow-y-auto">
				{isSearching &&
					<div className="px-6 p-2">
						<SearchNavSkeleton />
					</div>
				}
				{results.map(result => (
					<ListTaskItem key={result.id} task={result} />
				))}
			</div >
		</>
	)
}

// API search function
const searchTasksAction = async (search: string) => {
	try {

		const res = await searchTask(getSearchQuery({ name: search }))
		const data = res.data
		return data
	} catch (error) {
		console.log(error);
		return [];
	}
}
