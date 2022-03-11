import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface Props {
	menuButton?: JSX.Element
	children?: JSX.Element | JSX.Element[]
	width?: string
}

export const CustomMenu = ({ menuButton, children, width = 'w-64' }: Props) => {
	return (
		<Menu as="div" className="relative text-left flex">
			<div className='flex'>
				<Menu.Button>
					{menuButton}
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					static
					className={`absolute right-0 ${width} mt-8 p-1 origin-top-right bg-neutral-700 text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20`}
				>
					{children}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}