import { Nav } from '@/widgets/user/Nav/ui';

import { UserAside } from '@/widgets/user/UserAside';
import { StyledAside } from './styled';

export const Aside: React.FC = () => (
	<StyledAside>
		<UserAside />
		<Nav />
	</StyledAside>
);
