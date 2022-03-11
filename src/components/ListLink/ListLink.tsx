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
					`xl:px-6 py-3 px-2 border-transparent border-r-4 
					${match && 'border-r-primary-4 link__active text-primary-4'} `
				}
			>
				<div className="w-full flex gap-3 uppercase lg:justify-self-auto justify-center">
					<div className="flex-initial self-center text-2xl">
						{icon}
					</div>
					<div className="flex-1 self-center text-sm">
						{name}
					</div>
				</div>
			</div>
		</NavLink>
	)
}
