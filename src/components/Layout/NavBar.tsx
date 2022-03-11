import { useContext } from "react"
import { MdMenu, MdNotifications } from "react-icons/md"
import profile from '../../assets/images/profile.jpg'
import { UserContext } from "../../context/UserContext"
import { CustomMenu } from "../Menu/CustomMenu"
import { SearchNav } from "../SearchNav/SearchNav"
import { ProfileMenu } from "./ProfileMenu"

export const NavBar = () => {

	const { handleMenu } = useContext(UserContext)

	return (
		<div className='py-2 lg:px-6 pr-6 pl-2 rounded-xl bg-neutral-4 mb-4 flex text-neutral-2 text-xl gap-4 relative w-full'>
			<button onClick={handleMenu}>
				<div className="flex-initial">
					<MdMenu className="w-10 h-10" />
				</div>
			</button>
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
