import { SearchTask } from "../interfaces/Task";

export function getSearchQuery({ name, assigneeId, creatorId, tags, status, dueDate }: SearchTask) {

	const searchQuery = new URLSearchParams()
	if (name) {
		searchQuery.append('name', name)
	}
	if (assigneeId) {
		searchQuery.append('assigneeId', assigneeId)
	}
	if (creatorId) {
		searchQuery.append('creatorId', creatorId)
	}
	if (tags) {
		tags.forEach(tag => {
			searchQuery.append('tags', tag)
		});
	}
	if (status) {
		searchQuery.append('status', status)
	}
	if (dueDate) {
		searchQuery.append('dueDate', dueDate)
	}
	return searchQuery
}