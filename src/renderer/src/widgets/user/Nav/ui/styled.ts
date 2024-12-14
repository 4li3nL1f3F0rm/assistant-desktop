import styled from 'styled-components';

export const StyledNav = styled.section``;
export const StyledNavSection = styled.div``;
export const StyledNavTitle = styled.h4`
	color: #ffffff;
	font-weight: 600;
	padding: 24px 0px 8px 8px;
	text-transform: uppercase;
	font-size: 12px;
`;
export const StyledNavList = styled.ul``;
export const StyledNavItem = styled.li<{ $isActive?: boolean }>`
	margin: 0 0 4px;

	a {
		font-size: 14px;
		line-height: 22px;
		padding: 0 8px;
		height: 48px;
		display: flex;
		align-items: center;
		gap: 16px;
		border-radius: 8px;
		background: ${(props) => (props.$isActive ? 'rgba(0, 171, 85, 0.08)' : 'transparent')};
		color: ${(props) => (props.$isActive ? '#00AB55' : '#919eab')};
		transition: all 0.2s ease-in-out;
		&:hover {
			transition: all 0.2s ease-in-out;
			background: rgba(0, 171, 85, 0.08);
			color: #00ab55;
		}
	}

	svg {
		width: 22px;
		height: 22px;
	}
`;
