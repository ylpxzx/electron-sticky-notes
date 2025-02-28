import { getDB } from '.';
// import dayjs from 'dayjs';

export default class Todo {
  constructor() {
    this.store = getDB('todo').instance();
    this.data = [];
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