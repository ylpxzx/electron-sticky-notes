import { ipcMain } from 'electron';
import Todo from '../plugins/todo';

const todo = new Todo();

export const initEvent = () => {
  ipcMain.handle('getTodo', () => todo.getAllTodo());
};
