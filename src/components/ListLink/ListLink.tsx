import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
	name: string;
	icon: JSX.Element;
	to: string;
}

export const ListLink = ({ name, to, icon }: Props) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<NavLink to={to}>
			<div
				className={
					`lg:px-6 py-3 px-2 border-transparent lg:border-r-4 
					${match && 'lg:border-r-secondary link__active text-secondary'} `
				}
			>
				<div className="w-full flex gap-3 uppercase lg:justify-self-auto justify-center">
					<div className="flex-initial self-center text-2xl">
						{icon}
					</div>
					<div className="flex-1 self-center text-sm lg:block hidden">
						{name}
					</div>
				</div>
			</div>
		</NavLink>
	)
}