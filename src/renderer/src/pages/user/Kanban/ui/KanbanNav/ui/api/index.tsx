import { apiClient } from '@/app/config/apiClient';

import { CreateSpace, Space } from '../model/types';

export const api = {
	getSpaces: async () => {
		try {
			const response = await apiClient.get<Space[]>(`/spaces?includes=lists`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},
	createSpace: async (data: CreateSpace) => {
		try {
			const response = await apiClient.post<Space>(`/spaces`, data);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},
};
