export interface User {
	id: string;
	fullName: string;
	email: string;
	type: string;
	avatar: string | null;
	createdAt: Date;
	updatedAt: Date;
}
