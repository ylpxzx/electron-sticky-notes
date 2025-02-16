import { getDB } from '.';
import { config } from '../../config/default'

export default class AppConfig {
  constructor() {
    this.store = getDB('config');
    this.config = config.mainWindow;
    const isHasConfig = this.store.has('mainWindow');
    if (isHasConfig) {
      this.config = this.store.get('mainWindow')
    } else {
      this.store.set(config)
    }
  }

  get() {
    return this.config
  }

  set(key, value) {
    this.store.set({
      [key]: value
    })
  }
}