import { Menu } from '@headlessui/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface Props {
	profileIMG?: JSX.Element;
}

export const ProfileMenu = ({ profileIMG }: Props) => {
	const { user } = useContext(UserContext)
	return (
		<div className="px-1 py-1">
			<div className='flex gap-4'>
				<div className='flex-initial'>
					{profileIMG}
				</div>
				<div className='flex-1 self-center'>
					<p className='text-sm text-neutral-1'>{user.fullName}</p>
					<NavLink to='/settings'>
						<Menu.Item>
							{({ active }) => (
								<p className='text-sm text-neutral-2'>
									Manage your account.
								</p>
							)}
						</Menu.Item>
					</NavLink>
				</div>
			</div>
		</div>
	)
}
