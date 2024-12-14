import {
	Navigate,
	RouterProvider as ReactRouterProvider,
	createHashRouter
} from 'react-router-dom';

import { NotFound } from '@/pages/NotFound';
import { Dashboard } from '@/pages/admin/Dashboard';
import { Dashboard as UserDashboard } from '@/pages/user/Dashboard';

import { AdminLayout } from '../layouts/AdminLayout';
import { MainLayout } from '../layouts/MainLayout';
import { Mail } from '@/pages/user/Mail';
import { Chat } from '@/pages/user/Chat';
import { Kanban } from '@/pages/user/Kanban';
import { ComingSoon } from '@/pages/ComingSoon';
import { Calendar } from '@/pages/user/Calendar';

const router = createHashRouter([
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: '',
				element: <Navigate to="dashboard" />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
	// HOME PAGE
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Navigate to="dashboard" />,
			},
			{
				path: 'dashboard',
				element: <UserDashboard />,
			},
			{
				path: 'stock-market',
				element: <ComingSoon />,
			},
			{
				path: 'e-commerce',
				element: <ComingSoon />,
			},
			{
				path: 'analytics',
				element: <ComingSoon />,
			},
			{
				path: 'github',
				element: <ComingSoon />,
			},
			{
				path: 'blog',
				element: <ComingSoon />,
			},
			{
				path: 'banking',
				element: <ComingSoon />,
			},
			{
				path: 'app-mail',
				element: <Mail />,
			},
			{
				path: 'app-chat',
				element: <Chat />,
			},
			{
				path: 'app-calendar',
				element: <Calendar />,
			},
			{
				path: 'app-kanban',
				element: <Kanban />,
			},
		],
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
