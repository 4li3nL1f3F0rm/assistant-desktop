export type Space = {
	id: number;
	name: string;
	description?: string;
	lists: { id: number; name: string }[];
};

export type CreateSpace = {
	name: string;
	description?: string;
	user_id: number;
};
