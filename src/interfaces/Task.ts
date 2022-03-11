import { PointEstimateSelect, StatusSelect, TagsSelect } from "./Selects";
import { User } from "./User";

export type PointEstimate = '0' | '1' | '2' | '4' | '8'
export type Tags = "ANDROID" | "IOS" | "NODE_JS" | "RAILS" | "REACT"
export type Status = "BACKLOG" | "TODO" | "IN_PROGRESS" | "CANCELLED"
export interface TaskBase {
	name: string;
	tags: Tags[];
	status: Status;
	pointEstimate: PointEstimate;
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
	status: StatusSelect | null;
	pointEstimate: PointEstimateSelect | null;
	dueDate: string;
	dueTime: string;
	assigneeId: User | null;
}

export interface TaskFormFilterValues extends TaskFormValues {
	creatorId: User | null;
}

export interface SearchTask {
	name?: string;
	assigneeId?: string;
	creatorId?: string;
	tags?: Tags[];
	status?: Status | '';
	dueDate?: string;
}