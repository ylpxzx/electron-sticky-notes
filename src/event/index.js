import { ipcMain } from 'electron';
import Todo from '../plugins/db/todo';
import Config from '../plugins/db/config';

const todo = new Todo();
const config = new Config();

export const initEvent = (app) => {
  ipcMain.handle('getTodo', () => todo.getAllTodo());
  ipcMain.handle('getConfig', () => config.get());
  ipcMain.on('set-app-config', (event, content) => {
    config.set(content.key, content.value);
  })
  ipcMain.on('set-auto', (event, content) => {
    // 是否开机自启动
    if (content) {
      app.setLoginItemSettings({
        openAtLogin: true,
    })} else {
      app.setLoginItemSettings({
        openAtLogin: false,
      });
    }
  })
  ipcMain.on('updateTodo', (event, data) => {
    todo.update(data);
  })
  ipcMain.on('setTodo', (event, item) => {
    todo.set(item.key, item.value);
  })
  ipcMain.on('deleteTodo', (event, key) => {
    todo.delete(key);
  })
};
