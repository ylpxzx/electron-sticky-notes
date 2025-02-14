import { ipcMain } from 'electron';
import Todo from '../plugins/db/todo';

const todo = new Todo();

export const initEvent = () => {
  ipcMain.handle('getTodo', () => todo.getAllTodo());
};
