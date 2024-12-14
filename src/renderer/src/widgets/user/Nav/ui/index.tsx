import {
	AreaChartOutlined,
	BankOutlined,
	CalendarOutlined,
	DashboardOutlined,
	GithubOutlined,
	MailOutlined,
	MediumOutlined,
	ProjectOutlined,
	ShoppingOutlined,
	SlidersOutlined,
	WechatOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useMenu } from '../hooks/useMenu';
import {
	StyledNav,
	StyledNavItem,
	StyledNavList,
	StyledNavSection,
	StyledNavTitle,
} from './styled';

export const Nav: React.FC = () => {
	const { isActivePage } = useMenu();

	return (
		<StyledNav>
			<StyledNavSection>
				<StyledNavTitle>General</StyledNavTitle>
				<StyledNavList>
					<StyledNavItem $isActive={isActivePage('/dashboard')}>
						<Link to="/">
							<DashboardOutlined />
							Dashboard
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/stock-market')}>
						<Link to="stock-market">
							<SlidersOutlined />
							Stock Market
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/e-commerce')}>
						<Link to="e-commerce">
							<ShoppingOutlined />
							E-commerce
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/analytics')}>
						<Link to="analytics">
							<AreaChartOutlined />
							Analytics
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/github')}>
						<Link to="github">
							<GithubOutlined />
							Github
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/blog')}>
						<Link to="blog">
							<MediumOutlined />
							Blog
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/banking')}>
						<Link to="banking">
							<BankOutlined />
							Banking
						</Link>
					</StyledNavItem>
				</StyledNavList>
			</StyledNavSection>
			<StyledNavSection>
				<StyledNavTitle>Apps</StyledNavTitle>
				<StyledNavList>
					<StyledNavItem $isActive={isActivePage('/app-mail')}>
						<Link to="app-mail">
							<MailOutlined />
							Mail
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/app-chat')}>
						<Link to="app-chat">
							<WechatOutlined />
							Chat
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/app-calendar')}>
						<Link to="app-calendar">
							<CalendarOutlined />
							Calendar
						</Link>
					</StyledNavItem>
					<StyledNavItem $isActive={isActivePage('/app-kanban')}>
						<Link to="app-kanban">
							<ProjectOutlined />
							Kanban
						</Link>
					</StyledNavItem>
				</StyledNavList>
			</StyledNavSection>
		</StyledNav>
	);
};
