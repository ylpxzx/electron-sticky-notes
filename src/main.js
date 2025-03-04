import { app, BrowserWindow, ipcMain, screen, Tray, Menu, nativeImage, } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { initEvent } from './event/index';
import Store from 'electron-store';
import Config from './plugins/db/config';

const windowConfig = new Config();

// Avoid Warning：Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const configObj = windowConfig.get();

if (started) {
  app.quit();
}


const getImagePath = (img) => {
  return path.join(process.resourcesPath, img);
}

Store.initRenderer();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    x: windowConfig.config.x,
    y: windowConfig.config.y,
    height: windowConfig.config.height,
    width: windowConfig.config.width,
    minHeight: windowConfig.config.minHeight,
    minWidth: windowConfig.config.minWidth,
    frame: false,
    skipTaskbar: true, // 隐藏任务栏图标
    alwaysOnTop: windowConfig.config.isAlwaysOnTop,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });


  ipcMain.on('set-is-top', (event, isTop) => {
    mainWindow.setAlwaysOnTop(isTop);
    windowConfig.set('mainWindow.isAlwaysOnTop', isTop);
  })

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // 监听窗口移动事件, 实现左右侧贴边吸附功能
  mainWindow.on('moved', () => {
    const bounds = mainWindow.getBounds(); // 获取当前窗口的边界
    // 保存当前窗口的位置
    windowConfig.set('mainWindow.x', bounds.x);
    windowConfig.set('mainWindow.y', bounds.y);

    const screenBounds = screen.getPrimaryDisplay().bounds;  // 获取主显示器

    mainWindow.setPosition(bounds.x, bounds.y);

    if (screenBounds.width - (bounds.x + bounds.width) < 20) { // 右侧吸附
      mainWindow.setPosition(screenBounds.width - bounds.width, bounds.y);
    }

    if (bounds.x < 20) { // 左侧吸附
      mainWindow.setPosition(screenBounds.x, bounds.y);
    }
  });

  mainWindow.on('resize', () => {
    const bounds = mainWindow.getBounds();
    // 保存当前窗口的大小
    windowConfig.set('mainWindow.width', bounds.width);
    windowConfig.set('mainWindow.height', bounds.height);
  });

  ipcMain.on('exit-app', () => {
    mainWindow.close();
  })
  // mainWindow.webContents.openDevTools({ mode: "detach" });

  return mainWindow;
};

// 是否开机自启动
if (configObj.autoStart) {
  app.setLoginItemSettings({
    openAtLogin: true,
    openAsHidden: true,
})} else {
  app.setLoginItemSettings({
    openAtLogin: false,
    openAsHidden: false,
  });
}

const initTray = (windowObj) => {
  const tray = new Tray(nativeImage.createFromPath(getImagePath('static/note.png')))
  let menu = [{
      label: "退出应用",
      click: () => app.quit(),
  }]
  tray.setContextMenu(Menu.buildFromTemplate(menu));
  tray.setToolTip('This is a convenient visa application')
  // 双击显示主界面
  tray.addListener('double-click', () => {
    windowObj.show()
  })
}

app.whenReady().then(() => {
  const windowObj = createWindow();
  initEvent(app);
  initTray(windowObj);
  // 创建托盘
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