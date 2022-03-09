import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface Props {
	children?: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: Props) => {
	return (
		<div className="w-full h-full flex gap-8">
			<div className="flex-initial lg:w-64 h-full overflow-y-auto">
				<SideBar />
			</div>
			<div className="flex-1 h-full flex flex-col">
				<div className="w-full flex-initial">
					<NavBar />
				</div>
				<div className="w-full flex-1 h-full overflow-y-auto">
					{children}
				</div>
			</div>
		</div>
	)
}
