import { useMutation, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { CreateSpace } from '../model/types';

export const useKanbanNav = () => {
	const { isLoading, data: spacesData } = useQuery({
		queryKey: ['spaces'],
		queryFn: async () => {
			const response = await api.getSpaces();
			return response;
		},
	});
	const createSpace = useMutation({
		mutationKey: ['createSpace'],
		mutationFn: async (data: CreateSpace) => {
			const response = await api.createSpace(data);
			return response;
		},
	});

	return { isLoading: isLoading, spacesData, createSpace };
};
