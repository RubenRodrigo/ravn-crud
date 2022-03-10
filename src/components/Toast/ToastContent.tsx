import { MdDone, MdError } from 'react-icons/md';

type ToastStatus = 'error' | 'success';

interface Props {
	status: ToastStatus;
	msg: string;
}

export const ToastContent = ({ status, msg }: Props) => {
	return (
		<div className={`bg-neutral-600 ${status === 'error' ? 'text-secondary' : 'text-green-200'} p-2 rounded-lg flex gap-2`}>
			<span className="self-center" >
				<ToastIcon status={status} />
			</span>
			<span className="self-center">
				{msg}
			</span>
		</div>
	)
}

interface ToastIconProps {
	status: ToastStatus;
}
const ToastIcon = ({ status }: ToastIconProps) => {
	if (status === 'error') {
		return <MdError />
	} else {
		return <MdDone />
	}
}