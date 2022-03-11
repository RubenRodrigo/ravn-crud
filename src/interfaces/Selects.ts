import { PointEstimate, Status, Tags } from "./Task";

export interface PointEstimateSelect {
	id: number;
	name: PointEstimate
}
export interface TagsSelect {
	id: number;
	name: Tags
}
export interface StatusSelect {
	id: number;
	name: Status
}