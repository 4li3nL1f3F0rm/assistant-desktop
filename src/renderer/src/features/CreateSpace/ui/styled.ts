import { styled } from 'styled-components';

export const StyledCreateSpace = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	cursor: pointer;
	padding: 5px 10px;
	border-radius: 5px;
	color: #919eab;
	transition: all 0.2s ease-in-out;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: rgba(145, 158, 171, 0.16);
		color: #f0f1f3;
	}
`;
