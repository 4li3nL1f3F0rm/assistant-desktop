import { Avatar } from '@/shared/components/Avatar';

import {
	StyledUserAside,
	StyledUserAsideLeft,
	StyledUserAsideName,
	StyledUserAsideRight,
	StyledUserAsideRole,
} from './styled';

export const UserAside = () => {
	return (
		<StyledUserAside>
			<StyledUserAsideLeft>
				<Avatar />
			</StyledUserAsideLeft>
			<StyledUserAsideRight>
				<StyledUserAsideName>Carlota Monteiro</StyledUserAsideName>
				<StyledUserAsideRole>Admin</StyledUserAsideRole>
			</StyledUserAsideRight>
		</StyledUserAside>
	);
};
