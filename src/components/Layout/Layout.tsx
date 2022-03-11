import { useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { User } from "../../interfaces/User";
import { getUser } from "../../services/user";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

import toast, { Toaster } from 'react-hot-toast';
import { ToastContent } from "../Toast/ToastContent";


// Provider - UserContext. Share the UserState in the whole application
const { Provider } = UserContext

const INITIAL_USER_STATE: User = {
	id: "a73d0174-339b-4b9b-ba48-cbe72086b909",
	fullName: "Ruben Rodrigo Chañi Laura",
	email: "rodrigohde905@gmail.com",
	type: "CANDIDATE",
	avatar: null,
	createdAt: new Date('2022-03-08T16:04:47.41'),
	updatedAt: new Date('2022-03-09T00:26:12.743Z'),
}

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
