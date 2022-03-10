import { createContext } from "react";
import { User } from "../interfaces/User";

interface UserContextProps {
	user: User;
}

export const UserContext = createContext({} as UserContextProps)