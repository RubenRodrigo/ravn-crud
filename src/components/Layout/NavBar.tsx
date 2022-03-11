import { MdNotifications } from "react-icons/md"
import profile from '../../assets/images/profile.jpg'
import { CustomMenu } from "../Menu/CustomMenu"
import { SearchNav } from "../SearchNav/SearchNav"
import { ProfileMenu } from "./ProfileMenu"

export const NavBar = () => {

	return (
		<div className='py-2 px-6 rounded-xl bg-neutral-4 mb-4 flex text-neutral-2 text-xl gap-4 relative w-full'>
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
