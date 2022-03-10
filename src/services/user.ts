import { axiosInstance } from "../helpers/axiosInstance"

export const getUser = async () => {
	return await axiosInstance().get('/user')
}