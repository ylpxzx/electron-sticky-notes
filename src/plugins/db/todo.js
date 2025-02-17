import { getDB } from '.';
import dayjs from 'dayjs';

export default class Todo {
  constructor() {
    this.store = getDB('todo').instance();
    this.data = [
      {
        id: '123',
        sort: 0,
        task: '便签1：这是一个待完成的任务,等你来完成',
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isCompleted: false,
        isTip: true,
        isDeleted: false,
      },
      {
        id: '2',
        sort: 1,
        task: '便签2：这是一个已完成的任务',
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isCompleted: true,
        isTip: true,
        isDeleted: false,
      },
      {
        id: '3',
        sort: 2,
        task: '便签3：这是一个已删除的待完成任务',
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isCompleted: false,
        isTip: true,
        isDeleted: true,
      },
      {
        id: '4',
        sort: 3,
        task: '便签4：这是一个已删除的已完成任务',
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isCompleted: false,
        isTip: true,
        isDeleted: true,
      }
    ];
    const dataCount = this.store.size;
    if (dataCount) {
      this.data = this.getAllTodo();
    } else {
      this.store.set(this.data);
    }
  }

  getAllTodo() {
    return this.store.store;
  }

  set(key, value) {
    this.store.set({
      [key]: value
    });
  }

  delete(key) {
    if (this.store.has(key)) {
      this.store.delete(key);
    }
  }

  update(data) {
    this.store.set(data);
  }
}