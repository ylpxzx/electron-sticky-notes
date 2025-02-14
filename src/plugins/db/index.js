import Store from "electron-store";
const dbArray = new Map();

export class DB {
  constructor(key) {
    this.store = new Store({
      name: key,
    });
    this.dbKey = key;
  }

  instance() {
    return this.store;
  }

  set(obj) {
    this.store.set(obj);
  }

  get(key) {
    return this.store.get(key);
  }

  getAll () {
    return this.store.store;
  }

  delete(key) {
    this.store.delete(key);
  }

  has(key) {
    return this.store.has(key);
  }
}

// const db = new DB('todoData');
export function getDB(database) {
  if (dbArray.has(database)) {
    return dbArray.get(database);
  } else {
    let db = new DB(database);
    dbArray.set(database, db);
    return db;
  }
}