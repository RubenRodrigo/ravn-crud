import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_REST_URL_ENV || 'http://localhost:3000/'
const API_REST_KEY = process.env.REACT_APP_API_TOKEN_ENV || 'secret_key'

/**
 * Returns the an AxiosInstance
 * @param {string} accessToken. Default value is API_REST_URL_ENV env variable
 * @param {number} timeout. Default value is 5000 ms
 * @returns AxiosInstance
 */

export const axiosInstance = (accessToken?: string, timeout = 5000) => {
	if (!accessToken) accessToken = API_REST_KEY
	const axiosInstance = axios.create({
		baseURL: API_ENDPOINT,
		timeout: timeout,
		headers: {
			Authorization: accessToken
				? 'Bearer ' + accessToken
				: '',
			'Content-Type': 'application/json',
			accept: 'application/json',
		},
	});

	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		async function (error) {

			if (typeof error.response === 'undefined') {
				console.log(
					'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
				)
				return Promise.reject(error);
			}

			if (
				error.response.status === 401 &&
				error.response.statusText === 'Unauthorized'
			) {
				console.log("FAILED", error.response.data);
				return Promise.reject(error);
			}

			return Promise.reject(error);
		}
	);

	return axiosInstance
}