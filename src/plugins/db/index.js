import Store from "electron-store";
import dayjs from "dayjs";
const dbArray = new Map();

export class DB {
  constructor(key) {
    this.store = new Store({
      name: key,
    });
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
    ]
    const todoaCount = this.store.size;
    if (!todoaCount) {
      this.store.set(this.data);
    } else {
      this.data = this.getAll();
    }
  }

  set() {
    this.store.set();
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