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


	return (
		<Provider
			value={{ user: user }}
		>
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
			<Toaster
				position="bottom-right"
			/>
		</Provider>
	)
}
