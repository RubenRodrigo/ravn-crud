import { useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { User } from "../../interfaces/User";
import { getUser } from "../../services/user";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

import toast, { Toaster } from 'react-hot-toast';
import { ToastContent } from "../Toast/ToastContent";
import { INITIAL_USER_STATE } from "../../helpers/data";


// Provider - UserContext. Share the UserState in the whole application
const { Provider } = UserContext


interface Props {
	children?: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: Props) => {
	const [user, setUser] = useState<User>(INITIAL_USER_STATE)
	const [isMenuActive, setIsMenuActive] = useState(false)

	const getData = async () => {
		try {
			const res = await getUser()
			const data = res.data
			setUser(data)
		} catch (error) {
			toast.custom(
				<ToastContent status="error" msg="We can\'t load the tasks." />
			)
		}
	}

	useEffect(() => {
		getData()
	}, [])


	const handleMenu = () => {
		setIsMenuActive((prev) => !prev)
	}

	return (
		<Provider
			value={{
				user: user,
				isMenuActive,
				handleMenu,
			}}
		>
			<div className="w-full h-full flex gap-8">
				<SideBar />
				<div className="lg:w-10/12 w-full h-full flex flex-col">
					<div className="w-full flex-initial">
						<NavBar />
					</div>
					<div className="w-full flex-1 h-full overflow-y-auto">
						{children}
					</div>
				</div>
			</div>
			<Toaster
				position="bottom-right"
			/>
		</Provider >
	)
}
