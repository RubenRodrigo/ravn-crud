import { StatusSelect, TagsSelect } from "../interfaces/Selects"

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

