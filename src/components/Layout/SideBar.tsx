import { MdClose, MdDashboard, MdMenu, MdReorder, MdSettings } from "react-icons/md";
import { ListLink } from "../ListLink/ListLink";

import { ReactComponent as Logo } from '../../assets/svg/black.svg'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const SideBar = () => {
	const { isMenuActive, handleMenu } = useContext(UserContext)
	return (
		<>
			{
				isMenuActive ?
					<div className="lg:w-2/12 lg:p-0 h-full overflow-y-auto lg:static absolute top-0 left-0 z-20 p-2">
						<div className="lg:bg-neutral-4 bg-neutral-5 pl-2 rounded-xl h-full text-neutral-2">
							<div className="flex lg:justify-center justify-between lg:pt-12 pt-2 pb-12 ">
								<div className="px-1 self-center">
									<NavLink to='/'>
										<div className="flex justify-center">
											<Logo />
										</div>
									</NavLink>
								</div>
								<button onClick={handleMenu}>
									<div className="lg:hidden justify-center py-2 flex self-center">
										<MdClose className="w-10 h-10" />
									</div>
								</button>
							</div>
							<ul>
								<li className="my-2">
									<ListLink to="/" name="Dashboard" icon={<MdDashboard />} />
								</li>
								<li className="my-2">
									<ListLink to="/tasks" name="My Tasks" icon={<MdReorder />} />
								</li>
								<li className="my-2">
									<ListLink to="/settings" name="Settings" icon={<MdSettings />} />
								</li>
							</ul>
						</div>
					</div>
					:
					<></>
			}
		</>
	)
}
