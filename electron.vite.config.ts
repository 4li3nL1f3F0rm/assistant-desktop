import react from '@vitejs/plugin-react';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		resolve: {
			alias: {
				'@renderer': path.resolve('src/renderer/src'),
				'@': path.resolve(__dirname, 'src/renderer/src'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@components': path.resolve(__dirname, 'src/shared/components'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@config': path.resolve(__dirname, 'src/config'),
				'@services': path.resolve(__dirname, 'src/services'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@layout': path.resolve(__dirname, 'src/app/layouts'),
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@routes': path.resolve(__dirname, 'src/app/routes'),
				'@providers': path.resolve(__dirname, 'src/app/providers'),
				'@styles': path.resolve(__dirname, 'src/styles'),
			},
		},
		plugins: [
			react({
				babel: {
					plugins: [
						[
							'babel-plugin-styled-components',
							{
								displayName: true,
								fileName: false,
							},
						],
					],
				},
			}),
		],
		server: {
			watch: {
				usePolling: true,
			},
			host: true,
			port: 5155,
			strictPort: true,
		},
	},
});
