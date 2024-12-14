import styled from 'styled-components';

export const StyledUserAside = styled.div`
	width: 100%;
	height: 76px;
	padding: 16px 8px;
	border-radius: 12px;
	background: rgba(145, 158, 171, 0.08);
	margin: 0 0 8px;
	display: flex;
	align-items: center;
	gap: 16px;
`;
export const StyledUserAsideLeft = styled.div`
	width: 40px;
`;
export const StyledUserAsideRight = styled.div`
	width: calc(100% - 40px);
`;
export const StyledUserAsideName = styled.p`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: #fff;
	font-size: 14px;
	width: calc(100% - (8px));
`;
export const StyledUserAsideRole = styled.p`
	color: #fff;
	font-size: 12px;
`;
