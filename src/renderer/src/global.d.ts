import { Tray } from 'electron';

// Define the structure of the exposed Electron API
export interface ElectronAPI {
  tray: {
    create: (iconPath: string, title: string) => Tray;
  };
}

// Extend the Window interface to include the `electron` API
declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
