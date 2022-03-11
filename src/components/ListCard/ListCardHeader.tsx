import { IoCaretDownSharp } from "react-icons/io5";
import { Status } from "../../interfaces/Task"

interface Props {
	status: Status
	length: number
}
export const ListCardHeader = ({ status, length }: Props) => {
	return (
		<div className='flex gap-3 p-4'>
			<IoCaretDownSharp />
			<h3 className="flex-1">{status} ({length})</h3>
		</div>
	)
}
