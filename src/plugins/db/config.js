import { getDB } from '.';

export default class AppConfig {
  constructor() {
    this.store = getDB('config');
    this.data = [];
  }

  getAllConfig() {
    return this.store.getAll();
  }

  add(data) {
    this.store.set(data);
  }

  delete(key) {
    this.store.delete(key);
  }

  update(data) {
    this.store.set(data);
  }
}