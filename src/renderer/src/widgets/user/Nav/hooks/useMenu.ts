import { useLocation } from 'react-router-dom';

export const useMenu = () => {
	const { pathname } = useLocation();

	const isActivePage = (pagePath: string) => {
		return pathname === pagePath;
	};

	return { isActivePage };
};
