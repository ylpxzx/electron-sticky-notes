// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  setIsTop: (isTop) => ipcRenderer.send('set-is-top', isTop),
  exitApp: () => ipcRenderer.send('exit-app'),
  setAppConfig: (content) => ipcRenderer.send('set-app-config', content),
  getAllTodo: () => ipcRenderer.invoke('getTodo'),
  getAppConfig: () => ipcRenderer.invoke('getConfig'),
  updateTodo: (data) => ipcRenderer.send('updateTodo', data),
  setTodo: (item) => ipcRenderer.send('setTodo', item),
  deleteTodo: (key) => ipcRenderer.send('deleteTodo', key)
})