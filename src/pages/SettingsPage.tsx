import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import profile from "../assets/images/profile.jpg"
import { getDateTime } from "../helpers/dates"

export const SettingsPage = () => {

	const { user } = useContext(UserContext)

	return (
		<div className="text-white h-full w-full">
			<h3 className="text-xl">Account</h3>
			<hr className="border-neutral-700 my-4" />
			<div className="py-2">
				<h3 className="text-lg pb-2">Photo</h3>
				<div className="pb-4">
					<img
						className="rounded-full h-20 w-20 object-cover"
						src={profile}
						alt="Profile"
					/>
				</div>
				<button className="border border-neutral-500 p-2 rounded-lg">Upload Photo</button>
			</div>
			<hr className="border-neutral-700 my-4" />
			<div className="py-2">
				<h3 className="text-lg pb-2">Profile</h3>
				<div className="pb-4">
					<div className="pb-2">
						<span className="text-neutral-500">Email</span>
						<p>{user.email}</p>
					</div>
					<div className="py-2">
						<span className="text-neutral-500">Name</span>
						<p>{user.fullName}</p>
					</div>
					<div className="py-2">
						<span className="text-neutral-500">Type</span>
						<p>{user.type}</p>
					</div>
					<div className="py-2">
						<span className="text-neutral-500">Created at</span>
						<p>{getDateTime(user.createdAt).today} / {getDateTime(user.createdAt).displayTime}</p>
					</div>
					<div className="py-2">
						<span className="text-neutral-500">Updated at</span>
						<p>{getDateTime(user.updatedAt).today} / {getDateTime(user.updatedAt).displayTime}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
