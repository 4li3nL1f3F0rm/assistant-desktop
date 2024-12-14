import { Splitter } from 'antd';
import { Outlet } from 'react-router-dom';

import { Aside } from './Aside';
import { Header } from './Header';
import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutContentInner } from './styled';

export const MainLayout = () => {
	return (
		<StyledMainLayout>
			<Header />
			<Splitter style={{ height: '100vh', paddingTop: '40px' }}>
				<Splitter.Panel
					defaultSize={200}
					min={180}
					max={220}
					resizable={true}
					style={{ padding: 0 }}
				>
					<Aside />
				</Splitter.Panel>
				<Splitter.Panel style={{ padding: 0 }}>
					<StyledMainLayoutContent>
						<StyledMainLayoutContentInner>
							<Outlet />
						</StyledMainLayoutContentInner>
					</StyledMainLayoutContent>
				</Splitter.Panel>
			</Splitter>
		</StyledMainLayout>
	);
};
