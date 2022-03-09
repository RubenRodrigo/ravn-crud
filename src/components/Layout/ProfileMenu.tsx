import { NavLink } from 'react-router-dom';
import { User } from '../../interfaces/User'

interface Props {
	user: User;
	profileIMG?: JSX.Element;
}

export const ProfileMenu = ({ user, profileIMG }: Props) => {
	return (
		<div className="px-1 py-1">
			<div className='flex gap-4'>
				<div className='flex-initial'>
					{profileIMG}
				</div>
				<div className='flex-1 self-center'>
					<p className='text-sm'>{user.fullName}</p>
					<NavLink to='/settings'>
						<p className='text-sm text-secondary'>
							Manage your account.
						</p>
					</NavLink>
				</div>
			</div>
		</div>
	)
}
