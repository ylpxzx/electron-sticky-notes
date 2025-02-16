import { ipcMain } from 'electron';
import Todo from '../plugins/db/todo';
import Config from '../plugins/db/config';

const todo = new Todo();
const config = new Config();

export const initEvent = () => {
  ipcMain.handle('getTodo', () => todo.getAllTodo());
  ipcMain.handle('getConfig', () => config.get());
};
