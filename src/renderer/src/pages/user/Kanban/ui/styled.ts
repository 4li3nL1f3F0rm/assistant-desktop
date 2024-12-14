import styled from 'styled-components';

export const StyledKanban = styled.section`
	display: flex;
`;
export const StyledKanbanAside = styled.aside`
	height: calc(100vh - 56px);
	width: 160px;
	padding: 16px 8px 16px 8px;
	border-right: 1px solid #3c414a;
`;
export const StyledKanbanContent = styled.div`
	padding: 0 8px;
	overflow: auto;
`;
export const StyledKanbanNav = styled.section``;
export const StyledKanbanNavTitle = styled.h4`
	color: #fff;
	font-weight: 600;
	text-transform: uppercase;
	font-size: 12px;
	margin: 0 0 8px;
`;

export const StyledKanbanNavItemInner = styled.div`
	color: #919eab;
	font-size: 14px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px;
	margin: 0 0 4px;
`;
export const StyledKanbanNavList = styled.ul`
  padding: 0 0 8px;
  margin: 0 0 8px;
  border-bottom: 1px solid #3c414a;
`;
export const StyledKanbanNavItem = styled.li`
	cursor: pointer;
	&:hover ${StyledKanbanNavItemInner} {
		background: #3c414a;
		border-radius: 4px;
		color: #fff;
	}
`;

export const StyledKanbanNavItemInnerSpaceNameWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	svg {
		font-size: 10px;
	}
`;
export const StyledKanbanNavHiddenIcon = styled.div`
	display: none;
`;
export const StyledKanbanNavCountTask = styled.div`
	font-size: 10px;
	color: #fff;
	background: #30353c;
	padding: 2px 4px;
	border-radius: 4px;
`;
export const StyledKanbanNavItemInnerIconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	svg {
		width: 12px;
		height: 12px;
	}
`;

export const StyledKanbanNavSubList = styled.ul<{ $isOpen?: boolean }>`
	margin: 0 0 0 16px;
	display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;
export const StyledKanbanNavSubItem = styled.li`
	color: #919eab;
	font-size: 14px;
	margin: 0 0 2px;
	border-radius: 4px;
	padding: 2px 8px 2px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		background: rgba(145, 158, 171, 0.08);
		color: #fff;
	}
	&:hover ${StyledKanbanNavCountTask} {
		display: none;
	}
	&:hover ${StyledKanbanNavHiddenIcon} {
		display: block !important;
	}
`;

export const StyledKanbanNavCreateSpaceBtn = styled.button`
	width: 100%;
	padding: 8px;
	font-size: 14px;
	color: #919eab;
	background: transparent;
	border-radius: 4px;
	cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
	border: none;
	&:hover {
		background: #3c414a;
    color: #fff;
	}
`;
