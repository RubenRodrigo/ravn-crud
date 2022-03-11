import { PointEstimateSelect, StatusSelect, TagsSelect } from "../interfaces/Selects"
import { User } from "../interfaces/User"

export const tags: TagsSelect[] = [
	{ id: 1, name: 'ANDROID' },
	{ id: 2, name: 'IOS' },
	{ id: 3, name: 'NODE_JS' },
	{ id: 4, name: 'RAILS' },
	{ id: 5, name: 'REACT' },
]

export const status: StatusSelect[] = [
	{ id: 1, name: 'BACKLOG' },
	{ id: 2, name: 'TODO' },
	{ id: 3, name: 'IN_PROGRESS' },
	{ id: 4, name: 'CANCELLED' },
]


export const point: PointEstimateSelect[] = [
	{ id: 1, name: '0' },
	{ id: 2, name: '1' },
	{ id: 3, name: '2' },
	{ id: 4, name: '4' },
	{ id: 5, name: '8' },
]


export const INITIAL_USER_STATE: User = {
	id: "a73d0174-339b-4b9b-ba48-cbe72086b909",
	fullName: "Ruben Rodrigo Chañi Laura",
	email: "rodrigohde905@gmail.com",
	type: "CANDIDATE",
	avatar: null,
	createdAt: new Date('2022-03-08T16:04:47.41'),
	updatedAt: new Date('2022-03-09T00:26:12.743Z'),
}