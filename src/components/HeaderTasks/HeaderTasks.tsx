import { MdAdd, MdOutlineDashboard, MdOutlineList } from "react-icons/md"
import { Modal } from "../Modal/Modal"

export const HeaderTasks = () => {
	return (
		<div className="flex justify-between text-xl my-3">
			<div className="flex bg-neutral-600 bg-opacity-40 rounded-lg">
				<button className="p-2 rounded-lg self-center">
					<MdOutlineList />
				</button>
				<button className="p-2 bg-red-100 text-secondary border-red-700 border-2 rounded-lg">
					<MdOutlineDashboard />
				</button>
			</div>
			<div>
				<Modal
					className="bg-neutral-700"
					openButton={(open) =>
						<button
							onClick={open}
							className="p-2 ripple__secondary rounded-lg"
						>
							<MdAdd />
						</button>
					}
				>
					{
						({ onClose }) => (
							<div className="text-white">
								<h3
									className="text-lg font-medium leading-6"
								>
									Payment successful
								</h3>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										Your payment has been successfully submitted. We’ve sent you
										an email with all of the details of your order.
									</p>
								</div>

								<div className="mt-4">
									<button
										onClick={onClose}
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									>
										Got it, thanks!
									</button>
								</div>
							</div>
						)
					}
				</Modal>
			</div>
		</div>
	)
}
