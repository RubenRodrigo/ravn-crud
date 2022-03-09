import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

type OpenModal = () => void
type CloseModal = () => void

interface ChildrenProps {
	onOpen: OpenModal;
	onClose: CloseModal;
}

interface Props {
	children?: (props: ChildrenProps) => JSX.Element
	openButton?: (open: OpenModal) => JSX.Element
	className: string
}

export const Modal = ({ children, openButton, className }: Props) => {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			{openButton && openButton(openModal)}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-30 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center bg-black bg-opacity-70">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className={`inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-lg ${className}`}>
								{children && children({ onOpen: openModal, onClose: closeModal })}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
