import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { config } from './config/default';

// Avoid Warning：Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

if (started) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: config.mainWindow.height,
    width: config.mainWindow.width,
    minHeight: config.mainWindow.minHeight,
    minWidth: config.mainWindow.minWidth,
    frame: false,
    alwaysOnTop: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });


  ipcMain.on('set-is-top', (event, isTop) => {
    mainWindow.setAlwaysOnTop(isTop);
  })

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});