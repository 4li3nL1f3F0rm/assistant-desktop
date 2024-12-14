// import { electronAPI } from '@electron-toolkit/preload';
// import { contextBridge } from 'electron';

// // Custom APIs for renderer
// const api = {};

// // Use `contextBridge` APIs to expose Electron APIs to
// // renderer only if context isolation is enabled, otherwise
// // just add to the DOM global.
// if (process.contextIsolated) {
// 	try {
// 		contextBridge.exposeInMainWorld('electron', electronAPI);
// 		contextBridge.exposeInMainWorld('api', api);
// 	} catch (error) {
// 		console.error(error);
// 	}
// } else {
// 	// @ts-ignore (define in dts)
// 	window.electron = electronAPI;
// 	// @ts-ignore (define in dts)
// 	window.api = api;
// }


import { Tray, Menu } from 'electron';  // Import the necessary Electron modules
import { contextBridge } from 'electron';

// Define the custom Electron API with tray
const electronAPI = {
  tray: {
    create: (iconPath: string, title: string) => {
      const tray = new Tray(iconPath);  // Create a Tray instance
      tray.setTitle(title);  // Set tray title (macOS supports this)
      
      // Set a context menu for the tray icon
      tray.setContextMenu(
        Menu.buildFromTemplate([
          { label: 'Refresh', click: () => console.log('Refresh clicked') },
          { label: 'Quit', role: 'quit' },
        ])
      );
      return tray;
    },
  },
};

// Expose the API to the renderer process using `contextBridge` when `contextIsolation` is enabled
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);  // Expose the API to the renderer process
  } catch (error) {
    console.error(error);
  }
} else {
  // If context isolation is not enabled, add it directly to the global window object
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
}
