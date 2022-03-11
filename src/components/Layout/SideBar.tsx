import { MdAllInbox, MdDashboard, MdReorder, MdSettings } from "react-icons/md";
import { ListLink } from "../ListLink/ListLink";

export const SideBar = () => {
	return (
		<div className="bg-primary rounded-xl h-full text-neutral-500">
			<div className="lg:py-8 lg:px-4 py-4 px-2">
				<div className="text-neutral-300 flex justify-center ">
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
