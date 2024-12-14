import { Calendar as AntdCalendar, ConfigProvider } from 'antd';

export const Calendar = () => {
	return (
		<div>
			<h4>Calendar</h4>
			<ConfigProvider
				theme={{
					components: {
						Calendar: {
							fullBg: '#ccc',
							fullPanelBg: '#911',
							itemActiveBg: '#9c9',
							colorBgContainer: 'green',

						},
					},
				}}
			>
				<AntdCalendar	/>
			</ConfigProvider>
		</div>
	);
};
