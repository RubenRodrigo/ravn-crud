import { axiosInstance } from "../helpers/axiosInstance"

export const getUser = async () => {
	return await axiosInstance().get('/user')
}

export const getUserList = async () => {
	return await axiosInstance().get('/users')
}