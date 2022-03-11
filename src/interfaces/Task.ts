import { StatusSelect, TagsSelect } from "./Selects";
import { User } from "./User";

export type Tags = "ANDROID" | "IOS" | "NODE_JS" | "RAILS" | "REACT"
export type Status = "BACKLOG" | "TODO" | "IN_PROGRESS" | "CANCELLED"
export interface TaskBase {
	name: string;
	tags: Tags[];
	status: string;
	pointEstimate: string;
	dueDate: Date;
	assigneeId?: string;
}

export interface Task extends TaskBase {
	id: string;
	assignee?: User;
	creator?: User;
	position: number;
	createdAt: Date;
}

export interface TaskFormValues {
	name: string;
	tags: TagsSelect[];
	status: StatusSelect;
	pointEstimate: string;
	dueDate: string;
	dueTime: string;
	assigneeId: string;
}

export interface TaskFormFilterValues extends TaskFormValues {
	creatorId: string;
}

export interface SearchTask {
	name?: string;
	assigneeId?: string;
	creatorId?: string;
	tags?: Tags[];
	status?: Status | '';
	dueDate?: string;
}