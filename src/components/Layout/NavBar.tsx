import { MdNotifications } from "react-icons/md"
import profile from '../../assets/images/profile.jpg'
import { User } from "../../interfaces/User"
import { CustomMenu } from "../Menu/CustomMenu"
import { SearchNav } from "../SearchNav/SearchNav"
import { ProfileMenu } from "./ProfileMenu"

const INITIAL_STATE: User = {
	id: "a73d0174-339b-4b9b-ba48-cbe72086b909",
	fullName: "Ruben Rodrigo Chañi Laura",
	email: "rodrigohde905@gmail.com",
	type: "CANDIDATE",
	avatar: null,
	createdAt: new Date('2022-03-08T16:04:47.41'),
	updatedAt: new Date('2022-03-09T00:26:12.743Z'),
}

export const NavBar = () => {
	return (
		<div className='py-2 px-6 rounded-xl bg-primary mb-4 flex text-neutral-400 text-xl gap-4'>
			<SearchNav />
			<div className="flex-initial self-center text-2xl flex gap-5">
				<div className="self-center">
					<MdNotifications />
				</div>
				<div className="flex items-center">
					<CustomMenu
						menuButton={
							<img
								className="rounded-full h-10 w-10 object-cover"
								src={profile}
								alt="Profile"
							/>
						}
					>
						<ProfileMenu
							user={INITIAL_STATE}
							profileIMG={
								<img
									className="rounded-full h-10 w-10 object-cover"
									src={profile}
									alt="Profile"
								/>
							}
						/>
					</CustomMenu>
				</div>
			</div>
		</div >
	)
}
