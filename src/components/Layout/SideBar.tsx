import { MdAllInbox, MdDashboard, MdReorder, MdSettings } from "react-icons/md";
import { ListLink } from "../ListLink/ListLink";

export const SideBar = () => {
	return (
		<div className="bg-neutral-4 rounded-xl h-full text-neutral-2">
			<div className="lg:py-8 lg:px-4 py-4 px-2">
				<div className="flex justify-center ">
					<MdAllInbox className="w-8 h-8 lg:w-14 lg:h-14" />
				</div>
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
	)
}
