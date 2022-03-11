import { createContext } from "react";
import { User } from "../interfaces/User";

interface UserContextProps {
	user: User;
	isMenuActive: boolean;
	handleMenu: () => void
}

export const UserContext = createContext({} as UserContextProps)