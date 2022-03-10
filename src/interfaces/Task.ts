import { User } from "./User";

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

export type Tags = "ANDROID" | "IOS" | "NODE_JS" | "RAILS" | "REACT"
export type Status = "BACKLOG" | "TODO" | "IN_PROGRESS" | "CANCELLED" 